const gameBoard = (() => {
  let boxes = document.querySelectorAll(".boxes");
  let players = [Player("X", true), Player("O", false)];
  let board = new Array(9).fill("");

  const pushMarkToArray = () => {
    for (let i = 0; i < board.length; i++) {
      let box = boxes[i];
      box.addEventListener("click", () => {
        if (players[0].isActive && box.textContent === "") {
          board[i] = players[0].icon;
          displayController.updateDisplay();
          switchPlayers();
          checkWhoWon();
        }
        if (players[1].isActive && box.textContent === "") {
          board[i] = players[1].icon;
          displayController.updateDisplay();
          switchPlayers();
          checkWhoWon();
        }
      });
    }
  };

  const checkWhoWon = () => {
    let board = getBoard();
    let x = "X";
    let o = "O";
    if (
      (board[0] == x && board[1] == x && board[2] == x) ||
      (board[0] == o && board[1] == o && board[2] == o)
    ) {
      alert(`The winner is ${board[0]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[3] == x && board[4] == x && board[5] == x) ||
      (board[3] == o && board[4] == o && board[5] == o)
    ) {
      alert(`The winner is ${board[3]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[6] == x && board[7] == x && board[8] == x) ||
      (board[6] == o && board[7] == o && board[8] == o)
    ) {
      alert(`The winner is ${board[6]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[0] == x && board[3] == x && board[6] == x) ||
      (board[0] == o && board[3] == o && board[6] == o)
    ) {
      alert(`The winner is ${board[0]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[1] == x && board[4] == x && board[7] == x) ||
      (board[1] == o && board[4] == o && board[7] == o)
    ) {
      alert(`The winner is ${board[1]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[2] == x && board[4] == x && board[7] == x) ||
      (board[2] == o && board[4] == o && board[7] == o)
    ) {
      alert(`The winner is ${board[2]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[0] == x && board[4] == x && board[8] == x) ||
      (board[0] == o && board[4] == o && board[8] == o)
    ) {
      alert(`The winner is ${board[0]}`);
      clearBoard();
      displayController.clearDisplay();
    }
    if (
      (board[2] == x && board[4] == x && board[6] == x) ||
      (board[2] == o && board[4] == o && board[6] == o)
    ) {
      alert(`The winner is ${board[2]}`);
      clearBoard();
      displayController.clearDisplay();
    }
  };

  const switchPlayers = () => {
    players.forEach((player) => player.toggle());
  };

  const getBoard = () => {
    return [...board];
  };

  const clearBoard = () => {
    board = new Array(9).fill("");
    players = [Player("X", true), Player("O", false)];
    boxes.forEach((box) => (box.textContent = ""));
  };

  return {
    getBoard,
    clearBoard,
    pushMarkToArray,
  };
})();

gameBoard.pushMarkToArray();

const displayController = (() => {
  const init = () => {
    updateDisplay();
    clearDisplay();
  };

  const cacheDom = () => {
    return document.querySelectorAll(".boxes");
  };

  const updateDisplay = () => {
    let boxes = cacheDom();
    let board = gameBoard.getBoard();
    for (let i = 0; i < board.length; i++) {
      let box = boxes[i];
      if (box.id == i) box.textContent = board[i];
    }
  };

  const clearDisplay = () => {
    const boxes = cacheDom();
    const clearButton = document.querySelector(".clear-button");
    clearButton.addEventListener("click", () => {
      gameBoard.clearBoard();
      boxes.forEach((box) => {
        box.textContent = "";
      });
    });
  };

  return {
    init,
    updateDisplay,
    clearDisplay,
  };
})();

displayController.init();

function Player(icon, playing = false) {
  let state = {
    icon,
    playing,
  };
  return {
    get icon() {
      return state.icon;
    },
    get isActive() {
      return state.playing;
    },
    toggle() {
      state.playing = !state.playing;
    },
  };
}
