let gradient;

function setup() {
  createCanvas(900, 900);
  // create a linear gradient that's angled at 0 radians, and is 200px wide
  gradient = createLinearGradient(0, 200);
  // add some colors
  // at 0% make it lightblue, then at 50% make it pink, and at 100% make it magenta
  gradient.colors(0, "lightblue", 0.5, "pink", 1);
}

function draw() {
  background(255);

  fillGradient(gradient);
  rect(0, 0, 200, 200);
}
