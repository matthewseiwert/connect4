const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  left() {
    Screen.render();
    this.resetBackgroundColor(this.row, this.col, this.gridColor);
    this.col = Math.max(this.col - 1, 0);
    this.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.setMessage('You moved left');
    Screen.render();
  }

  right() {
    Screen.render();
    this.resetBackgroundColor(this.row, this.col, this.gridColor);
    this.col = Math.min(this.col + 1, this.numCols - 1);
    this.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.setMessage('You moved right');
    Screen.render();
  }

  up() {
    Screen.render();
    this.resetBackgroundColor(this.row, this.col, this.gridColor);
    this.row = Math.max(this.row - 1, 0);
    this.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.setMessage('You moved up');
    Screen.render();
  }

  down() {
    Screen.render();
    this.resetBackgroundColor(this.row, this.col, this.gridColor);
    this.row = Math.min(this.row + 1, this.numRows - 1);
    this.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.setMessage('You moved down');
    Screen.render();
  }

}


module.exports = Cursor;
