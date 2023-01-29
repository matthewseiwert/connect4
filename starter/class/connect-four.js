const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    let cursor = this.cursor;

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
    Screen.addCommand('left', 'move left', cursor.left.bind(cursor));
    Screen.addCommand('right', 'move right', cursor.right.bind(cursor));
    Screen.addCommand('up', 'move up', cursor.up.bind(cursor));
    Screen.addCommand('down', 'move down', cursor.down.bind(cursor));
    Screen.addCommand('x', 'X move', function() {
      Screen.render();
      Screen.setGrid(cursor.row, cursor.col, 'X');
      Screen.render();
    })
    Screen.addCommand('o', 'O move', function() {
      Screen.render();
      Screen.setGrid(cursor.row, cursor.col, 'O');
      Screen.render();
    })

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;
