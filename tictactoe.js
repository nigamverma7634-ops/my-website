let turn = "X";

function move(btn) {
  if (btn.innerText === "") {
    btn.innerText = turn;
    turn = turn === "X" ? "O" : "X";
  }
}
