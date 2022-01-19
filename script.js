const gameBoard = (() => {
  let board = new Array(9).fill("");

  const getBoard = () => {
    return [...board];
  };

  const clearBoard = () => {
    board = new Array(9).fill("");
  };

  return {
    getBoard,
    clearBoard,
  };
})();

const displayController = (() => {
  const init = () => {
    bindEvents();
    clearDisplay();
  };

  const cacheDom = () => {
    return document.querySelectorAll(".boxes");
  };

  const bindEvents = () => {
    let boxes = cacheDom();
    let board = gameBoard.getBoard();
    for (let i = 0; i < board.length; i++) {
      let box = boxes[i];
      box.addEventListener("click", (e) => {
        if (e.target.id == i) {
          box.textContent = board[i];
        }
      });
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
  };
})();

displayController.init();
