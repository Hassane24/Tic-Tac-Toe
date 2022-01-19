const gameBoard = (() => {
  const board = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

  const getBoard = () => {
    return [...board];
  };

  return {
    getBoard,
  };
})();

const displayController = (() => {
  const init = () => {
    cacheDom();
    bindEvents();
  };

  const cacheDom = () => {
    return document.querySelectorAll(".boxes");
  };

  const bindEvents = () => {
    let boxes = cacheDom();
    let board = gameBoard.getBoard();
    for (let i = 0; i < board.length; i++) {
      let box = boxes[i];
      console.log(box);
      box.addEventListener("click", (e) => {
        if (e.target.id == i) {
          box.textContent = board[i];
        }
      });
    }
  };

  return {
    init,
  };
})();

displayController.init();
