import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { getHtmlTagDefinition } from '@angular/compiler';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';

export interface Board { player1?: string, player2?: string, turn?: string, g: any[], msg?: string };
export interface Msgs { msgs: { sender: string, name: string, read: boolean, alert: boolean, msg: string }[] };

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss'],
})
export class TictactoeComponent implements OnInit {

  public name = "";

  public get player(): string {
    if (this.board.player1 && this.board.player1 === this.id) return "PLAYER X";
    if (this.board.player2 && this.board.player2 === this.id) return "PLAYER O";
    return null;
  }

  private playerPiece = 'X';

  private boards: AngularFirestoreCollection;

  private boardDocument: AngularFirestoreDocument<Board>;
  private boardSubscripiton: Subscription;
  public board: Board = { g: [] };

  private msgsDocument: AngularFirestoreDocument<Msgs>;
  private msgsSubscription: Subscription;
  public msgs: Msgs = <Msgs><unknown>{ msgs: [] };

  private gameBoard: {};

  private numRows = 2;
  private numCols = 2;

  private id = null;

  constructor(public firestore: AngularFirestore) {
    this.id = this.uuidv4();

    // Reset game and data and establish player1
    // If another active player they will note reset and become player2
    this.reset();
  }

  private reset() {
    this.board = { player1: this.id, turn: 'X', g: [] };
    this.playerPiece = 'X';
    this.initBoard();

    var that = this;
    this.boardDocument = this.firestore.collection("boards").doc("1");
    // persist rest board
    this.boardDocument.set(this.board)
      .catch(function (error) {
        console.error("boards/1: create error", error);
      });

    if (!this.boardSubscripiton) {
      this.boardSubscripiton = this.boardDocument.valueChanges().subscribe(board => {
        this.board = board;
        this.validate();
      },
      error => {
        console.error("boards/1: valueChanges error", error);
      })
    }

    this.msgsDocument = this.firestore.collection("msgs").doc<Msgs>("1");
    this.msgsDocument.get().subscribe(msgs => {
      if (msgs.exists) {
        this.msgs = <Msgs><unknown>msgs.data();
      } else {
        this.msgsDocument.set(this.msgs).catch(error => {
          console.error("msgs/1: create error", error);
        })
      }
    });

    if (!this.msgsSubscription) {
      this.msgsSubscription = this.msgsDocument.valueChanges().subscribe(msgs => {
        this.msgs = msgs;
        this.processMsgs();
      },
        error => {
          console.error("msgs/1: valueChanges error", error);
        });
    }
  }

  processMsgs() {
    this.msgs.msgs.forEach(msg => {
      if( msg.sender != this.id && !msg.read) {
        if( msg.alert) {
          alert(msg.name + ': ' + msg.msg);
        }

        // TODO add to chat view
        msg.read = true;
      }
    });
    this.update();
  }

  private initBoard() {
    this.board.g = [];;
    let gi = 0;

    this.gameBoard = {};

    for (var x = 0; x <= this.numRows; x++) {

      this.gameBoard[x] = {};

      for (var y = 0; y <= this.numCols; y++) {
        this.board.g[gi++] = '';
        this.gameBoard[x][y] = '';
      }
    }
  }

  private validate() {
    if (this.board.player1 === this.id) {
      // we are player1
      if (!this.board.player2) {
        // we have no player2!
        return false;
      } else {
        // we are player1 and have a player2...GAME IN PROGRESS!
        return true;
      }
    } else if (!this.board.player2) {
      // RESET detected! We must become player2!
      this.board.player2 = this.id;
      this.playerPiece = 'O';
      this.update();
      return true;
    } else if (this.board.player2 === this.id) {
      // we are player2! GAME IN PROGRESS!
      return true;
    } else {
      // probably shouldn't happen
      console.log("old game reset");
      this.reset(); // become player1
      return false; // we have no player2 :-(
    }
  }

  update() {
    this.boardDocument.update(this.board)
      .catch(error =>
        console.log(error));

    this.msgsDocument.update(this.msgs)
      .catch(error =>
        console.log(error));
  }

  async ngOnInit() {

    // Start a new game (overwrite any existing)


    // await this.boardDocument.valueChanges().toPromise().then( board => {
    //   this.board = board;
    // })

    var spaces = document.querySelectorAll('.space');
    let that = this;
    Array.prototype.forEach.call(spaces, function (space) {
      space.addEventListener('click', function () {
        that.markNextFree(space.getAttribute('data-x'), that);
      });
    });
  }

  public markNextFree(d, that) {
    if (that.board.turn !== that.playerPiece) {
      alert('Not ur turn!');
      return false;
    }

    if (that.board.g[d] !== '') {
      alert('Try another.');
      return false;
    }

    let x = Math.floor(d / 3);
    let y = d % 3;
    that.gameBoard[x][y] = that.playerPiece;
    that.board.g[d] = that.playerPiece;
    that.board.turn = that.board.turn === 'X' ? 'O' : 'X';
    that.update();

    if (that.isWinner(that)) {
      alert('You win!');
      that.msgs.msgs.append({sender: this.id, name: '', read: false, alert: true, msg: 'You lose!'});
      that.clearBoard(that);
      that.update();
    } else if (this.board.g.findIndex((space => { return space === '' })) === -1) {
      alert('It\'s a tie!');
      that.msgs.msgs.append({sender: this.id, name: '', read: false, alert: true, msg: 'It\'s a tie!'});
      that.clearBoard(that);
      that.update();
    }
  };

  // private clearBoard(that) {

  //   that.board.g = [];
  //   let gi = 0;

  //   that.gameBoard = {};

  //   for (var x = 0; x <= that.numRows; x++) {

  //     that.gameBoard[x] = {};

  //     for (var y = 0; y <= that.numCols; y++) {
  //       that.board.g[gi++] = '';
  //       that.gameBoard[x][y] = '';
  //     }
  //   }

  //   that.numTurns = 0;

  //   this.update();

  //   return that.gameBoard;

  // };

  private isWinner(that) {
    if (
      ((that.board.g[0] === that.playerPiece) && (that.board.g[1] === that.playerPiece) && (that.board.g[2] === that.playerPiece))
      || ((that.board.g[3] === that.playerPiece) && (that.board.g[4] === that.playerPiece) && (that.board.g[5] === that.playerPiece))
      || ((that.board.g[6] === that.playerPiece) && (that.board.g[7] === that.playerPiece) && (that.board.g[8] === that.playerPiece))
      || ((that.board.g[0] === that.playerPiece) && (that.board.g[3] === that.playerPiece) && (that.board.g[6] === that.playerPiece))
      || ((that.board.g[1] === that.playerPiece) && (that.board.g[4] === that.playerPiece) && (that.board.g[7] === that.playerPiece))
      || ((that.board.g[2] === that.playerPiece) && (that.board.g[5] === that.playerPiece) && (that.board.g[8] === that.playerPiece))
      || ((that.board.g[0] === that.playerPiece) && (that.board.g[4] === that.playerPiece) && (that.board.g[8] === that.playerPiece))
      || ((that.board.g[2] === that.playerPiece) && (that.board.g[4] === that.playerPiece) && (that.board.g[6] === that.playerPiece))
    ) {
      return true;
    }
  };

  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
