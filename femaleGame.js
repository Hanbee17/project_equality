
function titleScreen2() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#E0B1CB");
  fill(255);
  textSize(75);
  textFont('Bebas Neue');
  textAlign(CENTER);
  text('The Void', width*0.5, height*0.33);
  textSize(25);
  text('Press "F" To Start Game', width*0.5, height*0.66);
}

//Function for rendering the main game play screen.
function gameStage2() {
  background('#003566');
  fill("#A2D2FF");
  textSize(50);
  textAlign(CENTER);
  text('Avoid the circles!', width*0.5, height*0.1);
  ellipseMode(CENTER);
  noStroke();
  
  ellipse(width/2, height/2, 40);
  ellipse(200, 300, 40);
  ellipse(400, 500, 50);
  ellipse(600, 700, 80);
  ellipse(700, 300, 20);
  ellipse(400, 900, 30);
  ellipse(200, 600, 100);

  ellipse(100, 300, 40);
  ellipse(400, 200, 50);
  ellipse(200, 700, 80);
  ellipse(600, 700, 20);
  ellipse(500, 300, 30);
  ellipse(800, 600, 100);

  ellipse(1200, 100, 40);
  ellipse(1400, 300, 50);
  ellipse(1300, 300, 80);
  ellipse(1600, 900, 20);
  ellipse(1400, 400, 30);
  ellipse(1250, 670, 100);

  ellipse(1000, 100, 40);
  ellipse(1200, 300, 50);
  ellipse(1100, 300, 80);
  ellipse(1500, 900, 20);
  ellipse(1300, 400, 30);
  ellipse(1250, 470, 100);

  ellipse(1050, 50, 40);
  ellipse(1250, 350, 50);
  ellipse(1150, 350, 80);
  ellipse(1550, 950, 20);
  ellipse(1240, 450, 30);
  ellipse(1150, 780, 100);

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
