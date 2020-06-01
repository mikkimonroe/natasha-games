import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getHtmlTagDefinition } from '@angular/compiler';

export interface Board { g: any[], msg?: string };

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss'],
})
export class TictactoeComponent implements OnInit {

  private boards: AngularFirestoreCollection;

  private boardDocument: AngularFirestoreDocument<Board>;
  public board: Board = { g: [] };

  private gameBoard: {};
  private currentPlayer = 'X';
  private numRows = 2;
  private numCols = 2;
  private numTurns = 0;

  private ignore_msg = false;

  constructor(firestore: AngularFirestore) {
    firestore.doc<any>('alerts/1').valueChanges().subscribe(alert => {
      if(!this.ignore_msg) {
        this.ignore_msg = false;
        alert(alert);
      }
    })

    this.boardDocument = firestore.doc<Board>('boards/1');
    this.boardDocument.valueChanges().subscribe(board => {
      this.board = board;
    })
    
  }
  update() {
    this.boardDocument.update(this.board)
    .catch( error => 
      console.log(error));
  }

  async ngOnInit() {

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

    that.board.g = [];;
    let gi = 0;

    that.gameBoard = {};

    for (var x = 0; x <= that.numRows; x++) {

      that.gameBoard[x] = {};

      for (var y = 0; y <= that.numCols; y++) {
        that.board.g[gi++] = '';
        that.gameBoard[x][y] = '';
      }
    }

    delete that.board.msg;
    that.update();
  }

  public markNextFree(d, that) {


    let xx =Math.floor(d / 3);
    let yy = d % 3;

    var nextY: any;

    nextY = false;

    // for (var y = 0; y < that.numRows; y++) {
    //   if (that.gameBoard[x][y] === 'free') {
    //     nextY = y;
    //     break;
    //   }
    // }

    if (that.board.g[d] !== '') {
       alert('Try another.');
       return false;
    }

    that.gameBoard[xx][yy] = that.currentPlayer;
    that.board.g[d] = that.currentPlayer;

    that.update();

    // document.querySelector('#column-' + x + ' .row-' + nextY + ' circle').setAttribute(
    //   'class', that.currentPlayer
    // );

    that.numTurns = that.numTurns + 1;

    if (that.isWinner(that)) {
      this.ignore_msg = true;
      alert(that.currentPlayer + ' wins!');
      that.clearBoard(that);

      that.board.msg = that.currentPlayer + ' wins!';
      that.update();
    } else if (that.numTurns >= (that.numRows + 1) * (that.numCols + 1)) {
      this.ignore_msg = true;
      alert('It\'s a tie!');
      that.clearBoard(that);
      that.board.msg = 'It\'s a tie!';
      that.update();
    }

    that.currentPlayer = that.currentPlayer === 'X' ? 'O' : 'X';
  };

  private clearBoard(that) {

    that.board.g = [];
    let gi = 0;

    that.gameBoard = {};

    for (var x = 0; x <= that.numRows; x++) {

      that.gameBoard[x] = {};

      for (var y = 0; y <= that.numCols; y++) {
        that.board.g[gi++] = '';
        that.gameBoard[x][y] = '';
      }

      console.log(that.gameBoard);
    }

    that.numTurns = 0;

    this.update();

    return that.gameBoard;

  };

  private isWinner(that) {
    if(
      ((that.board.g[0] === that.currentPlayer) && (that.board.g[1] === that.currentPlayer) && (that.board.g[2] === that.currentPlayer))
      || ((that.board.g[3] === that.currentPlayer) && (that.board.g[4] === that.currentPlayer) && (that.board.g[5] === that.currentPlayer))
      || ((that.board.g[6] === that.currentPlayer) && (that.board.g[7] === that.currentPlayer) && (that.board.g[8] === that.currentPlayer))
      || ((that.board.g[0] === that.currentPlayer) && (that.board.g[3] === that.currentPlayer) && (that.board.g[6] === that.currentPlayer))
      || ((that.board.g[1] === that.currentPlayer) && (that.board.g[4] === that.currentPlayer) && (that.board.g[7] === that.currentPlayer))
      || ((that.board.g[2] === that.currentPlayer) && (that.board.g[5] === that.currentPlayer) && (that.board.g[8] === that.currentPlayer))
      || ((that.board.g[0] === that.currentPlayer) && (that.board.g[4] === that.currentPlayer) && (that.board.g[8] === that.currentPlayer))
      || ((that.board.g[2] === that.currentPlayer) && (that.board.g[4] === that.currentPlayer) && (that.board.g[6] === that.currentPlayer))
      ) {
        return true;
    }
  };
}
