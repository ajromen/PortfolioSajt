function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fff')
  fill(163, 67, 24, 20);
  stroke(163, 67, 24, 20);
  vozac = new Vozi();
}

function draw() {

  if (!mouseIsPressed) {
    vozac.razmisljaj()
    vozac.crtaj()
  }
  else {
    background('#fff')
  }

}