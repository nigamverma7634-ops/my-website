let board = ["", "", "", "", "", "", "", "", ""];
let current = "X";
let gameOver = false;

const wins = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function play(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = current;
  document.getElementsByClassName("cell")[index].innerText = current;

  if (checkWin()) {
    document.getElementById("status").innerText = current + " WON 🎉";
    gameOver = true;
    return;
  }

  current = current === "X" ? "O" : "X";
}

function checkWin() {
  return wins.some(p =>
    board[p[0]] &&
    board[p[0]] === board[p[1]] &&
    board[p[1]] === board[p[2]]
  );
}

function resetGame() {
  board = ["","","","","","","","",""];
  gameOver = false;
  current = "X";
  document.getElementById("status").innerText = "";
  [...document.getElementsByClassName("cell")].forEach(c => c.innerText = "");
}
