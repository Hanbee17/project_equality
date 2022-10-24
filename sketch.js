let initialButton;
let pageState = 'first';

function setup() {
  cvn = createCanvas(windowWidth, windowHeight * 0.8);
  cvn.parent('canvasPage');

  background(0);
  intialButtons();
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
    }

    initialButton.draw();

}

function intialButtons() {
  initialButton = new Clickable();
  initialButton.locate(-400, -500);
  initialButton.resize(windowWidth * 1, windowWidth * 1);
  initialButton.color = "#00000000";
  initialButton.textColor = "#000000";
  initialButton.strokeWeight = 00;
  initialButton.text = "Click To Start";
  initialButton.onRelease = function() {
    pageState = 'main'
    initialButton.locate(-400, -500);
  }
}

function firstScreen() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background(220);
  startButton();
}

function questionPage() {
  createCanvas(windowWidth * 1, windowHeight * 2.6);
  background(0);
}
