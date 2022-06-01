module.exports = class GameOfLife {
  constructor(board) {
    this.board = board;
  }

  nextGen() {
    let auxBoard = [];

    for (let i = 0; i < this.board.length; i++) {
      auxBoard.push([]);
      for (let j = 0; j < this.board[i].length; j++) {
        auxBoard[i].push(this.board[i][j]);
        const livingCells = this.#countNeighbors(i, j);

        if (this.board[i][j] && (livingCells < 2 || livingCells > 3)) {
          auxBoard[i][j] = false;
        }

        if (!this.board[i][j] && livingCells == 3) {
          auxBoard[i][j] = true;
        }
      }
    }

    this.board = auxBoard;
  }

  #countNeighbors(i, j) {
    let livingCells = 0;

    if (i > 0) {
      if (j > 0) {
        livingCells = this.board[i - 1][j - 1] ? livingCells + 1 : livingCells;
      }
      livingCells = this.board[i - 1][j] ? livingCells + 1 : livingCells;
      if (j < this.board[i].length - 1) {
        livingCells = this.board[i - 1][j + 1] ? livingCells + 1 : livingCells;
      }
    }

    if (i < this.board.length - 1) {
      if (j > 0) {
        livingCells = this.board[i + 1][j - 1] ? livingCells + 1 : livingCells;
      }
      livingCells = this.board[i + 1][j] ? livingCells + 1 : livingCells;
      if (j < this.board[i].length - 1) {
        livingCells = this.board[i + 1][j + 1] ? livingCells + 1 : livingCells;
      }
    }

    if (j > 0) {
      livingCells = this.board[i][j - 1] ? livingCells + 1 : livingCells;
    }

    if (j < this.board[i].length - 1) {
      livingCells = this.board[i][j + 1] ? livingCells + 1 : livingCells;
    }

    return livingCells;
  }
}
