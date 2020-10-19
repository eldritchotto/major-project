// WASD interactive project (no jump physics, yet) 
// deer boy's full name is Ibinyu (Ib-in-yuu) shortened to ibby
// hes from an old project of mine that ive kind of repurpoused into this

// sept 22, 2020
// otto joseph turley

// universal variables
let x;
let y;
let isMovingLeft, isMovingRight, isMovingUp, isMovingDown;
let ibby;
let walkR, walkL, idleR;
let stillL, stillR, jumpR, downR;
let forest;
let cellSize;
let moss;
let jumpers;
let scrolls;
let scrollCount = 0;
// this is a doozy
// setup is chunky-ish. not as bad as the wasd section
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = windowHeight - 110;
  isMovingLeft = false;
  isMovingRight = false;
  isMovingUp = false;
  isMovingDown = false;
  stillL = true;
  stillR = false;
  jumpR = false;
  downR = false;
  ibby = loadImage('frames/idleL.gif');
  walkR = loadImage('frames/walkR.gif');
  walkL = loadImage('frames/walkL.gif');
  idleR = loadImage('frames/idleR.gif');
  jumpRi = loadImage('frames/jumpR.png');
  downRi = loadImage('frames/downR.png');
  forest = loadImage('frames/background.png');
  moss = loadImage('frames/moss.png');
  jumpers = loadImage('frames/top-platforms.png');
  scrolls = loadImage('frames/scrolls.png');


  if (width<height){
    cellSize = windowHeight/15;
  }
  else {
    cellSize = windowWidth/15;
  }



}

// the only small block of code you'll find.
// you know. the nice looking one. draw function.
function draw() {
  //background(140);
  imageMode(CORNER);
  image(forest, 0,0,windowWidth,windowHeight);
  imageMode(CENTER);

  keyControls();
  displayIbby();
  gravity();
  mossRoad();
  offScreen();
  amountOfScrolls();
  interactScrolls();
}

function mossRoad(){
  for (let i=0; i<windowWidth + 50; i += 40){
    image(moss, i, windowHeight -8);
  }
  image (scrolls, 100, windowHeight - 60);
}

function amountOfScrolls(){
  fill("black");
  textSize(60);
  textAlign(LEFT, TOP);
  text(scrollCount, 20,20);
}

function interactScrolls(){
  if (100, windowHeight === x, y){
    scrollCount += 1;
  }

}



// fun wasd movin time
// this section is massive grab a coffee or something
// or a snack. 
// popcorn?

// seriously this is CHUNKY
function keyPressed() {
  if (key === 'w') {
    isMovingUp = true;
    stillR = false;
    stillL = false;
    jumpR = true;
    downR = false;
  } else if (key === 's') {
    isMovingDown = false;
    stillR = false;
    stillL = false;
    jumpR = false;
    downR = true;

  } else if (key === 'a') {
    isMovingLeft = true;
    stillR = false;
    stillL = false;
    jumpR = false;
    downR = false;

  } else if (key === 'd') {
    isMovingRight = true;
    stillR = false;
    stillL = false;
    jumpR = false;
    downR = false;
  }
}

function keyReleased() {
  if (key === 'w') {
    isMovingUp = false;
    stillR = false;
    stillL = true;
    jumpR = false;
    downR = false;
  } else if (key === 's') {
    isMovingDown = false;
    stillR = true;
    stillL = false;
    jumpR = false;
    downR = false;
  } else if (key === 'a') {
    isMovingLeft = false;
    stillR = false;
    stillL = true;
    jumpR = false;
    downR = false;

  } else if (key === 'd') {
    isMovingRight = false;
    stillR = true;
    stillL = false;
    jumpR = false;
    downR = false;
  }
}

function keyControls() {
  if (isMovingUp) {
    y -= 10
  } else if (isMovingDown) {
    if (y < windowHeight - 110) {
      y += 5;
      downR = true;

    }
  } else if (isMovingLeft) {
    x -= 4;
  } else if (isMovingRight) {
    x += 4;
  }
}

// finally. deer boy time.
// i destroyed my wrist for these sprites please appreciate them
function displayIbby() {
  imageMode(CENTER);
  if (isMovingLeft === true) {
    image(walkL, x, y);
  } else if (isMovingRight === true) {
    image(walkR, x, y);
  } else if (stillR === true) {
    image(idleR, x, y);
  } else if (stillL === true) {
    image(ibby, x, y);
  } else if (jumpR === true) {
    image(jumpRi, x, y);
  } else if (downR === true || isMovingDown === true) {
    image(downRi, x, y);
  }
}

// gravity. small code block. i guess i lied up at the top. 
function gravity() {
  if (y < windowHeight - 110) {
    y += 7;
   
  }
}

function offScreen(){
  if (x >= windowWidth){
    x = 1;
  }
  else if (x <= 0) {
    x = windowWidth;
  }
}