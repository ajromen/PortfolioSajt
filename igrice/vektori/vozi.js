class Vozi {
  constructor(x = width / 2, y = height / 2) {
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.pos = createVector(x, y);
    this.size = 50
    //this.slika()
  }
  razmisljaj() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.limit(1)

    this.vel.add(this.acc);
    this.vel.limit(20)
    this.pos.add(this.vel);
  }
  crtaj() {
    ellipse(this.pos.x, this.pos.y, this.size)
  }
}