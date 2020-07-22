let main = document.querySelector(".main");
let playfield = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
];

let gameSpeed = 400;

function draw() {
  let mainInnerHTML = "";
  for (let yVer = 0; yVer < playfield.length; yVer++) {
    for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
      if (playfield[yVer][xHor] === 1) {
        mainInnerHTML += '<div class="cell movingCell"></div>';
      } else if (playfield[yVer][xHor] === 2) {
        mainInnerHTML += '<div class="cell fixedCell"></div>';
      } else {
        mainInnerHTML += '<div class="cell"></div>';
      }
    }
  }
  main.innerHTML = mainInnerHTML;
}

function canTetroDown() {
  for (let yVer = 0; yVer < playfield.length; yVer++) {
    for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
      if (playfield[yVer][xHor] === 1) {
        if (yVer == playfield.length - 1 || playfield[yVer + 1][xHor] === 2) {
          return false;
        }
      }
    }
  }
  return true;
}

function moveTetroDown() {
  if (canTetroDown()) {
    for (let yVer = playfield.length - 1; yVer >= 0; yVer--) {
      for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
        if (playfield[yVer][xHor] === 1) {
          playfield[yVer + 1][xHor] = 1;
          playfield[yVer][xHor] = 0;
        }
      }
    }
  } else {
    fixTetro();
  }
}
// LEFT
function canTetroMoveLeft() {
  for (let yVer = 0; yVer < playfield.length; yVer++) {
    for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
      if (playfield[yVer][xHor] === 1) {
        if (xHor === 0 || playfield[yVer][xHor - 1] === 2) {
          return false;
        }
      }
    }
  }
  return true;
}

function moveTetroLeft() {
  if (canTetroMoveLeft()) {
    for (let yVer = playfield.length - 1; yVer >= 0; yVer--) {
      for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
        if (playfield[yVer][xHor] === 1) {
          playfield[yVer][xHor - 1] = 1;
          playfield[yVer][xHor] = 0;
        }
      }
    }
  }
}
// Right
function canTetroMoveRight() {
  for (let yVer = 0; yVer < playfield.length; yVer++) {
    for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
      if (playfield[yVer][xHor] === 1) {
        if (xHor === 9 || playfield[yVer][xHor + 1] === 2) {
          return false;
        }
      }
    }
  }
  return true;
}

function moveTetroRight() {
  if (canTetroMoveRight()) {
    for (let yVer = playfield.length - 1; yVer >= 0; yVer--) {
      for (let xHor = 9; xHor >= 0; xHor--) {
        if (playfield[yVer][xHor] === 1) {
          playfield[yVer][xHor + 1] = 1;
          playfield[yVer][xHor] = 0;
        }
      }
    }
  }
}
// Проверить на заполенность линии
function checkFullLines() {
  let canRemoveLine = true;

  for (let yVer = playfield.length - 1; yVer >= 0; yVer--) {
    for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
      if (playfield[yVer][xHor] !== 2) {
        canRemoveLine = false;
      }
    }
    if (canRemoveLine) playfield.splice(yVer, 1);
  }
  if (canRemoveLine) playfield.splice(yVer, 0, draw());
}

// Зафиксировать фигуру
function fixTetro() {
  for (let yVer = 0; yVer < playfield.length; yVer++) {
    for (let xHor = 0; xHor < playfield[yVer].length; xHor++) {
      if (playfield[yVer][xHor] === 1) {
        playfield[yVer][xHor] = 2;
      }
    }
  }

  checkFullLines();

  playfield[0] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
  playfield[1] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
}

function staryGame() {
  moveTetroDown();
  draw();
  setTimeout(staryGame, gameSpeed);
}

draw();
document.onkeydown = function (e) {
  // left
  if (e.keyCode === 37) {
    moveTetroLeft();
    //   right
  } else if (e.keyCode === 39) {
    moveTetroRight();
  }
  // down
  else if (e.keyCode === 40) {
    moveTetroDown();
  }
  draw();
};
setTimeout(staryGame, gameSpeed);
