let timer2 = 60;

function titleScreen() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#A2D2FF");
  fill(255);
  textSize(75);
  textFont('Bebas Neue');
  textAlign(CENTER);
  text('Press "S" To Start Game', width * 0.5, height * 0.5);
}

//Function for rendering the main game play screen.
function gameStage1() {
  background('#003566');
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Avoid the circle!', width * 0.4, height * 0.1);
  text('Time Count: ', width * 0.6, height * 0.1);
  text(timer2, width * 0.68, height * 0.1);
  if (frameCount % 60 == 0 && timer2 > 0) {
    timer2--;
  }
  if (timer2 == 0) {
    pageState = 'gameover';
  }

  fill("#A2D2FF");
  ellipseMode(CENTER);
  noStroke();
  ellipse(width / 2, height / 2, 40);
  stroke(255);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 50);

  //Checking for lose state (touching circle).
  if (mouseX > (width / 2) - 20 && mouseX < (width / 2) + 20) {
    if (mouseY > (height / 2) - 20 && mouseY < (height / 2) + 20) {
      pageState = 'gameover';
    }
  }
}

//Function for rendering game over screen.
function gameOver() {
  background("#A2D2FF");
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('GAME OVER', width * 0.5, height * 0.33);
  textSize(25);
  text("Press 'W' To Go to Artist's Statement", width * 0.5, height * 0.66);
  text("Press 'S' To Restart", width * 0.5, height * 0.72);
}
