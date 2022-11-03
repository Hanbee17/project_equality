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
      case 'gameoverFe':
        gameOverFemale();
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
  if (pageState === 'malegame' || pageState === 'gameover') {
    if (key === 's' || key === 'S') {
      pageState = 'maleMainGame';
    }
}
}

function keyTyped() {
  if (pageState === 'femalegame' || pageState === 'gameoverFe') {
  if (key === 'f') {
    pageState = 'femaleMainGame';
  }
}
}

function keyPressed() {
  if (pageState === 'gameover'|| pageState === 'gameoverFe') {
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
  textSize(50);
  textAlign(CENTER);
  fill(255);
  textSize(100);
  textFont('Bebas Neue');
  text('Click Anywhere To Begin', width * 0.5, height * 0.5);
  // let p = createP(textFront);
  // p.id('myFrontText');
}

function questionPage() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#5E548E");
  textFont('Bebas Neue');
  textAlign(CENTER);
  fill(255);
  text('Are you...', width * 0.5, height * 0.2);
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
    maleBut.locate(-4000, -5000);
    femaleBut.locate(-4000, -5000);
    initialButton.locate(-4000, -5000);
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
    femaleBut.locate(-4000, -5000);
    maleBut.locate(-4000, -5000);
    initialButton.locate(-4000, -5000);
  }
}

function lastPage() {
  createCanvas(windowWidth * 1, windowHeight * 1.3);
  background("#5E548E");
  fill("#A2D2FF");
  textSize(50);
  textFont('Bebas Neue');
  textAlign(CENTER);
  text('Artist Statement', width * 0.5, height * 0.08);

  fill(255);
  textSize(30);
  textFont('Barlow Condensed');
  text('This project was based on the idea of equality vs equality.', width * 0.5, height * 0.15);
  text('If the game was too easy for you, it means you were privileged.', width * 0.5, height * 0.18);

  text('"Someone has to work harder to get the same result."', width * 0.5, height * 0.23);
  text('Even though, we believe it is all the same rights and same opportunities.', width * 0.5, height * 0.26);
  text('Some start this game with big disadvantages or penalties with them.', width * 0.5, height * 0.29);

  text('Michael Sandel asks the same thing in the book, The Tyranny of Merit.', width * 0.5, height * 0.34);

  text('Is the society we live in really fair?', width * 0.5, height * 0.39);
  text('Is it really fair to discriminate based on individual abilities?', width * 0.5, height * 0.42);
  text('Does our life depend only on ability?', width * 0.5, height * 0.45);

  text('No one can be confident that I have accomplished everything in my life entirely', width * 0.5, height * 0.50);
  text('with my own strength and my own abilities.', width * 0.5, height * 0.53);
  text('We all know well that even my birth is not my ability.', width * 0.5, height * 0.56);

  text('We ourselves, our consciousness, our words, and our actions,', width * 0.5, height * 0.61);
  text('must become the social safety net itself.', width * 0.5, height * 0.64);

  fill("#A2D2FF");
  textSize(40);
  textFont('Bebas Neue');
  textAlign(CENTER);
  text('“The meritocratic ideal is not a remedy for inequality; it is a justification of inequality.”', width * 0.5, height * 0.8);
  text('- Michael J. Sandel ', width * 0.5, height * 0.85);
}
