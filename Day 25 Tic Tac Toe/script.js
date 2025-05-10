let boxes = document.querySelectorAll(".box");
let turnO = true;
let msg = document.querySelector("#msg");
let winner = document.querySelector("#winner");
let newGameBtn = document.querySelector("#newGame");
let restartBtn = document.querySelector("#restart");

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const msgshowing = (winner) => {
  msg.innerText = `Congratulations,the winner is Player ${winner}`;
  disabledBox();
};

const restart = () => {
  turnO = true;
  enableBox();
  winner.style.visibility = "hidden";
};

const disabledBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

newGameBtn.addEventListener("click", restart);
restartBtn.addEventListener("click", restart);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("the box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (position of wins) {
    let val1 = boxes[position[0]].innerText;
    let val2 = boxes[position[1]].innerText;
    let val3 = boxes[position[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        msgshowing(val1);
        winner.style.visibility = "visible";
      }
    }
  }
};
