let abc = [new p5.Vector(), new p5.Vector(), new p5.Vector(), new p5.Vector()];
let t = new p5.Vector();
let x, y, z;

function setup() {
  strokeWeight(5)
  stroke(0)
  createCanvas(windowWidth, windowHeight);
  background('#fff');
  abc[0].set(0, height);
  abc[1].set(width, height);
  abc[2].set(width / 2, 0);
  abc[3].set(width, 0);

  t.set(0, height);
  point(t.x, t.y);

  abc.forEach(tacka => {
    point(tacka.x, tacka.y);
    print(tacka)
  });

  //crtaj(1000000);
}

function crtaj(n) {
  while (n--) vozi();
}
function vozi() {
  z = floor(random(0, 3))
  x = abc[z].x;
  y = abc[z].y;
  point(floor((x + t.x) / 2), floor((y + t.y) / 2));
  t.x = floor((x + t.x) / 2);
  t.y = floor((y + t.y) / 2);
}
function draw() {
    vozi()
    vozi()
    vozi()
    vozi()
    vozi()
    vozi()
  
}