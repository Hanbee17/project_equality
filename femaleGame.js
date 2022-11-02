let timer = 30;

function titleScreen2() {
  createCanvas(windowWidth * 1, windowHeight * 1);
  background("#E0B1CB");
  fill(255);
  textSize(75);
  textFont('Bebas Neue');
  textAlign(CENTER);
  text('Press "F" To Start Game', width * 0.5, height * 0.5);
}

//Function for rendering the main game play screen.
function gameStage2() {
  background('#003566');
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Avoid the circle!', width * 0.4, height * 0.1);
  text('Time Count: ', width * 0.6, height * 0.1);
  text(timer, width * 0.68, height * 0.1);
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    pageState = 'gameoverFe';
  }

  fill("#A2D2FF");
  ellipseMode(CENTER);
  noStroke();

  ellipse(width / 2, height / 2, 40);
  ellipse(width / 1.8, height / 1.1, 500);
  ellipse(width / 1.2, height / 1.2, 100);

  ellipse(width / 3, height / 3, 80);
  ellipse(width / 4, height / 4, 50);
  ellipse(width / 5, height / 5, 100);

  ellipse(width / 3, height / 2, 40);
  ellipse(width / 5, height / 1.1, 50);
  ellipse(width / 4, height / 1.2, 100);

  ellipse(width / 5, height / 5, 70);
  ellipse(width / 1.8, height / 2, 50);
  ellipse(width / 1.6, height / 3, 100);

  ellipse(width / 1.7, height / 2.5, 40);
  ellipse(width / 1.4, height / 1.5, 50);
  ellipse(width / 1.2, height / 2.2, 100);

  ellipse(width / 1.3, height / 2.3, 70);
  ellipse(width / 1.8, height / 4, 50);
  ellipse(width / 3.3, height / 1.5, 100);

  ellipse(width / 3.9, height / 1.6, 40);
  ellipse(width / 5.2, height / 4, 50);
  ellipse(width / 4.1, height / 3, 100);

  ellipse(width / 2.1, height / 6, 70);
  ellipse(width / 7.5, height / 1.4, 50);
  ellipse(width / 3.2, height / 5, 100);

  ellipse(width / 9, height / 2.4, 70);
  ellipse(width / 12, height / 4, 500);
  ellipse(width / 7, height / 3.6, 100);

  ellipse(width / 1.1, height / 10, 500);
  ellipse(width / 1.3, height / 6, 70);
  ellipse(width / 1.5, height / 8, 40);

  ellipse(width / 1, height / 1.5, 50);
  ellipse(width / 1.3, height / 3.3, 70);
  ellipse(width / 1.7, height / 5.5, 40);

  stroke(255);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 50);

  //Checking for lose state (touching circle).
  if (mouseX > (width / 2) - 20 && mouseX < (width / 2) + 20) {
    if (mouseY > (height / 2) - 20 && mouseY < (height / 2) + 20) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.8) - 250 && mouseX < (width / 1.8) + 250) {
    if (mouseY > (height / 1.1) - 250 && mouseY < (height / 1.1) + 250) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.2) - 50 && mouseX < (width / 1.2) + 50) {
    if (mouseY > (height / 1.2) - 50 && mouseY < (height / 1.2) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 3) - 40 && mouseX < (width / 3) + 40) {
    if (mouseY > (height / 3) - 40 && mouseY < (height / 3) + 40) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 4) - 25 && mouseX < (width / 4) + 25) {
    if (mouseY > (height / 4) - 25 && mouseY < (height / 4) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 5) - 50 && mouseX < (width / 5) + 50) {
    if (mouseY > (height / 5) - 50 && mouseY < (height / 5) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 3) - 20 && mouseX < (width / 3) + 20) {
    if (mouseY > (height / 2) - 20 && mouseY < (height / 2) + 20) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 5) - 25 && mouseX < (width / 5) + 25) {
    if (mouseY > (height / 1.1) - 25 && mouseY < (height / 1.1) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 4) - 50 && mouseX < (width / 4) + 50) {
    if (mouseY > (height / 1.2) - 50 && mouseY < (height / 1.2) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 5) - 35 && mouseX < (width / 5) + 35) {
    if (mouseY > (height / 5) - 35 && mouseY < (height / 5) + 35) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.8) - 25 && mouseX < (width / 1.8) + 25) {
    if (mouseY > (height / 2) - 25 && mouseY < (height / 2) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.6) - 50 && mouseX < (width / 1.6) + 50) {
    if (mouseY > (height / 3) - 50 && mouseY < (height / 3) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.7) - 20 && mouseX < (width / 1.7) + 20) {
    if (mouseY > (height / 2.5) - 20 && mouseY < (height / 2.5) + 20) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.4) - 25 && mouseX < (width / 1.4) + 25) {
    if (mouseY > (height / 1.5) - 25 && mouseY < (height / 1.5) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.2) - 50 && mouseX < (width / 1.2) + 50) {
    if (mouseY > (height / 2.2) - 50 && mouseY < (height / 2.2) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.3) - 35 && mouseX < (width / 1.3) + 35) {
    if (mouseY > (height / 2.3) - 35 && mouseY < (height / 2.3) + 35) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.8) - 25 && mouseX < (width / 1.8) + 25) {
    if (mouseY > (height / 4) - 25 && mouseY < (height / 4) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 3.3) - 50 && mouseX < (width / 3.3) + 50) {
    if (mouseY > (height / 1.5) - 50 && mouseY < (height / 1.5) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 3.9) - 20 && mouseX < (width / 3.9) + 20) {
    if (mouseY > (height / 1.6) - 20 && mouseY < (height / 1.6) + 20) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 5.2) - 25 && mouseX < (width / 5.2) + 25) {
    if (mouseY > (height / 4) - 25 && mouseY < (height / 4) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 4.1) - 50 && mouseX < (width / 4.1) + 50) {
    if (mouseY > (height / 3) - 50 && mouseY < (height / 3) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 2.1) - 35 && mouseX < (width / 2.1) + 35) {
    if (mouseY > (height / 6) - 35 && mouseY < (height / 6) + 35) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 7.5) - 25 && mouseX < (width / 7.5) + 25) {
    if (mouseY > (height / 1.4) - 25 && mouseY < (height / 1.4) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 3.2) - 50 && mouseX < (width / 3.2) + 50) {
    if (mouseY > (height / 5) - 50 && mouseY < (height / 5) + 50) {
      pageState = 'gameoverFe';
    }
  }


  if (mouseX > (width / 9) - 35 && mouseX < (width / 9) + 35) {
    if (mouseY > (height / 2.4) - 35 && mouseY < (height / 2.4) + 35) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 12) - 250 && mouseX < (width / 12) + 250) {
    if (mouseY > (height / 4) - 250 && mouseY < (height / 4) + 250) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 7) - 50 && mouseX < (width / 7) + 50) {
    if (mouseY > (height / 3.6) - 50 && mouseY < (height / 3.6) + 50) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.1) - 250 && mouseX < (width / 1.1) + 250) {
    if (mouseY > (height / 10) - 250 && mouseY < (height / 10) + 250) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.3) - 35 && mouseX < (width / 1.3) + 35) {
    if (mouseY > (height / 6) - 35 && mouseY < (height / 6) + 35) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.5) - 20 && mouseX < (width / 1.5) + 20) {
    if (mouseY > (height / 8) - 20 && mouseY < (height / 8) + 20) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1) - 25 && mouseX < (width / 1) + 25) {
    if (mouseY > (height / 1.5) - 25 && mouseY < (height / 1.5) + 25) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.3) - 35 && mouseX < (width / 1.3) + 35) {
    if (mouseY > (height / 3.3) - 35 && mouseY < (height / 3.3) + 35) {
      pageState = 'gameoverFe';
    }
  }

  if (mouseX > (width / 1.7) - 20 && mouseX < (width / 1.7) + 20) {
    if (mouseY > (height / 5.5) - 20 && mouseY < (height / 5.5) + 20) {
      pageState = 'gameoverFe';
    }
  }
}

function gameOverFemale() {
  background("#CDB4DB");
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('GAME OVER', width * 0.5, height * 0.33);
  textSize(25);
  text("Press 'W' To Go to Artist's Statement", width * 0.5, height * 0.66);
}

//Function for rendering game over screen.
