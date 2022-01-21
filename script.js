const gameBoard = (() => {
  let boxes = document.querySelectorAll(".boxes");
  let players = [Player("X", true), Player("O", false)];
  let board = new Array(9).fill("");
  console.log(players[0].icon);

  const pushMarkToArray = () => {
    for (let i = 0; i < board.length; i++) {
      let box = boxes[i];
      box.addEventListener("click", (e) => {
        if (players[0].isActive && box.textContent === "") {
          board[i] = players[0].icon;
          displayController.updateDisplay();
          switchPlayers();
        }

        if (players[1].isActive && box.textContent === "") {
          board[i] = players[1].icon;
          switchPlayers();
          displayController.updateDisplay();
        }
      });
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
