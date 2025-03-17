const button = document.querySelector(".board__button");
const board = document.querySelector(".board");

function createBoard() {
    board.style.display = "none";
};

addEventListener("click", (event) => {
    event.preventDefault();
    
    const input = document.querySelector(".board__input");
    let inputValue = input.value;
    let cards;

    if(inputValue >= 2 && inputValue <= 6 && inputValue % 2 != 0) {
        cards = inputValue * inputValue;
    }
    else {
        cards = 4;
    }

    createBoard();
});