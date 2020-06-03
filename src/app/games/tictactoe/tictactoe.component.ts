import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getHtmlTagDefinition } from '@angular/compiler';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';

export interface Board { player1?: string, player2?: string, turn?: string, g: any[], msg?: string };

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss'],
})
export class TictactoeComponent implements OnInit {

  public name = "";

  public get player(): string {
    if( this.board.player1 && this.board.player1 === this.id ) return "PLAYER 1";
    if( this.board.player2 && this.board.player2 === this.id ) return "PLAYER 2";
    return null;
  }

  private playerPiece = 'X';

  private boards: AngularFirestoreCollection;

  private boardDocument: AngularFirestoreDocument<Board>;
  public board: Board = { g: [] };

  private gameBoard: {};
  
  private numRows = 2;
  private numCols = 2;

  private id = null;

  constructor(public firestore: AngularFirestore) {
    this.id = this.uuidv4();

    // Reset game and data and establish player1
    // If another active player they will note reset and become player2
    this.reset();

    // Register for changes.
    //
    // If a new player joins they will reset and become player1
    // 
    this.boardDocument.valueChanges().subscribe(board => {
      this.board = board;
      this.validate();
    })
  }

  private reset() {
    this.boardDocument = this.firestore.collection("boards").doc("1");
    this.board = { player1: this.id, turn: 'X', g: [] };
    this.playerPiece = 'X';
    this.initBoard();

    var that = this;
    this.boardDocument.set(this.board)
      .catch(function (error) {
        console.error("boards/1: error", error);
      });

    // this.firestore.collection("msgs").doc("1").set({})
    //   .then(function () {
    //     console.log("msgs/1 created");
    //   })
    //   .catch(function (error) {
    //     console.error("msgs/1: error", error);
    //   });
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
    if( this.board.player1 === this.id ) {
      // we are player1
      if( !this.board.player2 ) {
        // we have no player2!
        return false;
      } else {
        // we are player1 and have a player2...GAME IN PROGRESS!
        return true;
      }
    } else if( !this.board.player2 ) {  
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


    let xx = Math.floor(d / 3);
    let yy = d % 3;

    var nextY: any;

    nextY = false;

    // for (var y = 0; y < that.numRows; y++) {
    //   if (that.gameBoard[x][y] === 'free') {
    //     nextY = y;
    //     break;
    //   }
    // }

    if (that.board.turn !== that.playerPiece) {
      alert('Not ur turn!');
      return false;
    }

    if (that.board.g[d] !== '') {
      alert('Try another.');
      return false;
    }

    that.gameBoard[xx][yy] = that.playerPiece;
    that.board.g[d] = that.playerPiece;
    that.board.turn = that.board.turn === 'X' ? 'O' : 'X';
    that.update();

    // document.querySelector('#column-' + x + ' .row-' + nextY + ' circle').setAttribute(
    //   'class', that.playerPiece
    // );

    // that.numTurns = that.numTurns + 1;

    if (that.isWinner(that)) {
      alert(that.playerPiece + ' wins!');
      that.clearBoard(that);

      that.board.msg = that.playerPiece + ' wins!';
      that.update();
    } else if (this.board.g.findIndex((space => { return space === ''})) === -1) {
      alert('It\'s a tie!');
      that.clearBoard(that);
      that.board.msg = 'It\'s a tie!';
      that.update();
    }
    
    // that.currentPlayer = that.currentPlayer === 'X' ? 'O' : 'X';
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
