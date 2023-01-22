var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = ["--74916-5", "2---6-3-9", "-----7-1-", "-586----4", "--3----9-", "--62--187", "9-4-7---2", "67-83----", "81--45---"];

var solution = ["387491625", "241568379", "569327418", "758619234", "123784596", "496253187", "934176852", "675832941", "812945763"];

window.onload = function () {
  setGame();
};

function setGame() {
  for (let index = 1; index <= 9; index++) {
    const number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }
  // Board 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < array.length; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString;
      tile.innerText = board[r][c];
      if (board[r][c] != "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");
      }
      tile.classList.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }

    let coordinates = this.id.split("-");
    let r = parseInt(coordinates[0]);
    let c = parseInt(coordinates[1]);

    if (solution[r][c] == numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      errors += 1;
      document.getElementById("errors").innerText = errors;
    }
  }
}
