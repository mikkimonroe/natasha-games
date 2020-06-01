// https://codepen.io/r00k/pen/pvRaGq?__cf_chl_jschl_tk__=61bf02b92c339ee32466ede5c22cc40b9e980346-1590366555-0-AYWNd_7N_LyHoYU2gYVxp7mEiAZk3VgCFA2BYGGxicZli55Q3nr4P8Baj9jTe9ZDQyfFSaafCsFHsfqFfl5xZFPXGwL0o9V5MEC7iCwn-q3hEocoWnrO0zZCXgJ-ABNdtg4sIj5ToVgc8hgPeRZpq5JA5eIwFFkjdPLVJf85Ek4JWXe5RZJ5IUEL1e11cIZA9coFheXck76pboqltJXUBE8ZFr_ZJVw32ezjH7_fA0nwBjuXzQM5vu6_gXXEafmJ5VO_rWNjMn_W5wV1vMdu8OQODEec_qxSuuWx2O2wfiy1D5o_0hTlhh-ioTPyMD_QbfDDWlB03DfxjJWI6yo6Ce_k-d5UsYOQLVNsHxA8Dvu5

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-four',
  templateUrl: './connect-four.component.html',
  styleUrls: ['./connect-four.component.scss'],
})
export class ConnectFourComponent implements OnInit {

  private gameBoard = {};
  private currentPlayer = 'red';
  private numRows = 6;
  private numCols = 7;
  private numTurns = 0;

  constructor() { }

  ngOnInit() {

    var columns = document.querySelectorAll('.column');
    let that = this;
    Array.prototype.forEach.call(columns, function (col) {
      
      col.addEventListener('click', function () {
        that.markNextFree(col.getAttribute('data-x'), that);
      });
    });

    for (var x = 0; x <= that.numRows; x++) {

      that.gameBoard[x] = {};

      for (var y = 0; y <= that.numCols; y++) {
        that.gameBoard[x][y] = 'free';
      }
    }
  }

  public markNextFree(x, that) {

    var nextY:any;

    nextY = false;

    for (var y = 0; y < that.numRows; y++) {
      if (that.gameBoard[x][y] === 'free') {
        nextY = y;
        break;
      }
    }

    if (nextY === false) {
      alert('No free spaces in this column. Try another.');
      return false;
    }

    that.gameBoard[x][nextY] = that.currentPlayer;

    document.querySelector('#column-' + x + ' .row-' + nextY + ' circle').setAttribute(
      'class', that.currentPlayer
    );

    that.numTurns = that.numTurns + 1;

    if (that.isWinner(parseInt(x), nextY, that)) {
      alert(that.currentPlayer + ' wins!');
      //that.clearBoard(that);
    } else if (that.numTurns >= that.numRows * that.numCols) {
      alert('It\'s a tie!');
      //that.clearBoard(that);
    }

    that.currentPlayer = that.currentPlayer === 'red' ? 'yellow' : 'red';
  };

  private clearBoard(that) {

    Array.prototype.forEach.call(document.querySelectorAll('circle'), function (piece) {
      piece.setAttribute('class', 'free');
    });

    that.gameBoard = {};

    for (var x = 0; x <= that.numRows; x++) {

      that.gameBoard[x] = {};

      for (var y = 0; y <= that.numCols; y++) {
        that.gameBoard[x][y] = 'free';
      }

      console.log(that.gameBoard);
    }

    that.numTurns = 0;

    return that.gameBoard;

  };

  private isWinner(currentX, currentY, that) {
    return that.checkDirection(currentX, currentY, 'vertical', that) ||
    that.checkDirection(currentX, currentY, 'diagonal', that) ||
    that.checkDirection(currentX, currentY, 'horizontal', that);
  };

  private isBounds(x, y, that) {
    return (that.gameBoard.hasOwnProperty(x) && typeof that.gameBoard[x][y] !== 'undefined');
  };

  private checkDirection(currentX, currentY, direction, that) {

    var chainLength, directions;

    directions = {
      horizontal: [
        [0, -1], [0, 1]
      ],
      vertical: [
        [-1, 0], [1, 0]
      ],
      diagonal: [
        [-1, -1], [1, 1], [-1, 1], [1, -1]
      ]
    };

    chainLength = 1;

    directions[direction].forEach(function (coords) {

      var i = 1;

      while (that.isBounds(currentX + (coords[0] * i), currentY + (coords[1] * i), that) &&
        (that.gameBoard[currentX + (coords[0] * i)][currentY + (coords[1] * i)] === that.currentPlayer)
      ) {
        chainLength = chainLength + 1;
        i = i + 1;
      };

    });

    return (chainLength >= 4);

  };
}
