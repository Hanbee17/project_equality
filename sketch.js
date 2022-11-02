let initialButton;
let maleBut;
let femaleBut;
let pageState = 'first';
let textFront = "Hello, Click Anywhere To Begin";

function setup() {
  cvn = createCanvas(windowWidth, windowHeight);
  cvn.parent('canvasPage');

  background(0);
  intialButtons();
  maleButtons();
  femaleButtons();
  firstScreen();
}

function startButton() {
  initialButton.locate(windowWidth * 0.445, windowHeight * 0.35);
}

function draw() {
  switch (pageState) {
    case 'title':
      firstScreen();
      break;
    case 'main':
      questionPage();
      break;
    case 'malegame':
      titleScreen();
      break;
    case 'maleMainGame':
      gameStage1();
      break;
    case 'gameover':
      gameOver();
      break;
    case 'femalegame':
      titleScreen2();
      break;
    case 'femaleMainGame':
      gameStage2();
      break;
    case 'artsistStatement':
      lastPage();
      break;
  }
  initialButton.draw();
  maleBut.draw();
  femaleBut.draw();
}

function keyReleased() {
  if (pageState === 'malegame' || pageState === 'femalegame') {
    if (key === 's') {
      pageState = 'maleMainGame';
    } else if (key === 'f') {
      pageState = 'femaleMainGame';
    }
}
}

function keyPressed() {
   if (pageState === 'gameover') {
     if (key === 'w') {
       pageState = 'artsistStatement';
     }
   }
}



function intialButtons() {
  initialButton = new Clickable();
  initialButton.locate(-400, -500);
  initialButton.resize(windowWidth * 1, windowHeight * 1);
  initialButton.color = "#00000000";
  initialButton.textColor = "#00000000";
  initialButton.strokeWeight = 00;
  initialButton.text = "Click To Start";
  initialButton.onRelease = function() {
    pageState = 'main'
    initialButton.locate(-400, -500);
  }
}

function firstScreen() {
  createCanvas(windowWidth * 1, windowHeight * 0.82);
  background(220);
  startButton();
  //let p = createP(textFront);
  //p.id('myFrontText');
}

function questionPage() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#5E548E");

  maleBut.locate(windowWidth * 0.25, windowHeight * 0.25);
  femaleBut.locate(windowWidth * 0.55, windowHeight * 0.25);
}

function maleButtons() {
  maleBut = new Clickable();
  maleBut.locate(-400, -500);
  maleBut.resize(windowWidth * 0.15, windowHeight * 0.4);
  maleBut.color = "#A2D2FF";
  maleBut.textColor = "#5E548E";
  maleBut.strokeWeight = 0;
  maleBut.text = "MALE";
  maleBut.textSize = 45;
  maleBut.textFont = "Bebas Neue";
  maleBut.textScaled = false;
  maleBut.onRelease = function() {
    pageState = 'malegame'
    maleBut.locate(-400, -500);
    femaleBut.locate(-400, -500);
  }
}

function femaleButtons() {
  femaleBut = new Clickable();
  femaleBut.locate(-400, -500);
  femaleBut.resize(windowWidth * 0.15, windowHeight * 0.4);
  femaleBut.color = "#E0B1CB";
  femaleBut.textColor = "#5E548E";
  femaleBut.strokeWeight = 0;
  femaleBut.text = "FEMALE";
  femaleBut.textSize = 45;
  femaleBut.textFont = "Bebas Neue";
  femaleBut.textScaled = false;
  femaleBut.onRelease = function() {
    pageState = 'femalegame'
    femaleBut.locate(-400, -500);
    maleBut.locate(-400, -500);
  }
}

function lastPage() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#4E2E60");
  fill(255);
  textSize(50);
  textFont('Bebas Neue');
  text('This is Last Page.', width*0.5, height*0.1 );
}
