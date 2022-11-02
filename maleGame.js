
function titleScreen() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#A2D2FF");
  fill(255);
  textSize(75);
  textFont('Bebas Neue');
  textAlign(CENTER);
  text('The Void', width*0.5, height*0.33);
  textSize(25);
  text('Press "S" To Start Game', width*0.5, height*0.66);
}

//Function for rendering the main game play screen.
function gameStage1() {
  background('#003566');
  fill("#A2D2FF");
  textSize(50);
  textAlign(CENTER);
  text('Avoid the circle!', width*0.5, height*0.1);
  ellipseMode(CENTER);
  noStroke();
  ellipse(width/2, height/2, 40);
  stroke(255);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 50);

  //Checking for lose state (touching circle).
  if (mouseX > (width/2)-20 && mouseX < (width/2)+20) {
    if (mouseY > (height/2)-20 && mouseY < (height/2)+20) {
      pageState = 'gameover';
    }
  }
}

//Function for rendering game over screen.
function gameOver() {
  background("#CDB4DB");
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('GAME OVER', width*0.5, height*0.33);
  textSize(25);
  text("Press 'W' To Go to Artist's Statement", width*0.5, height*0.66);

}
