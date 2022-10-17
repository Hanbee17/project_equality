let gradient;

function setup() {
  createCanvas(800, 650);
  gradient = createLinearGradient(0, 900);
  gradient.colors(0.3, "lightblue", 0.9, "pink");
}

function draw() {
  background(255);

  fillGradient(gradient);
  rect(0, 0, 800, 600);
  noStroke();
}
