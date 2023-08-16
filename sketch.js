let bubbles = [];
let rm;
let v;
let suga;
let jimin;
let jin;
let hobi;
let jungkook;
let btsLogo;
let purpleHeart;
let fingerHeart;
let backgroundImage;

function preload() {
  rm = loadImage("css/images/rm.png");
  v = loadImage("css/images/v.png");
  suga = loadImage("css/images/suga.png");
  jimin = loadImage("css/images/jimin.png");
  jin = loadImage("css/images/jin.png");
  hobi = loadImage("css/images/hobi.png");
  jungkook = loadImage("css/images/jungkook.png");
  btsLogo = loadImage("css/images/bts-logo.png");
  purpleHeart = loadImage("css/images/purple-heart.png");
  fingerHeart = loadImage("css/images/finger-heart.png");
  backgroundImage = loadImage("css/images/purple-space.png");
}

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < 2.5; i++) {
    bubbles.push(new Bubble(random(width), random(height), rm));
    bubbles.push(new Bubble(random(width), random(height), v));
    bubbles.push(new Bubble(random(width), random(height), suga));
    bubbles.push(new Bubble(random(width), random(height), jimin));
    bubbles.push(new Bubble(random(width), random(height), jin));
    bubbles.push(new Bubble(random(width), random(height), hobi));
    bubbles.push(new Bubble(random(width), random(height), jungkook));
  }
}

function draw() {
  background(backgroundImage);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

function mouseClicked() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].checkMouseInteraction();
  }
}

class Bubble {
  constructor(x, y, defaultImage, w, h) {
    this.x = x;
    this.y = y;
    this.defaultImage = defaultImage;
    this.clicked = false;
    this.w = 100;
    this.h = 100;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.rotationImages = [btsLogo, purpleHeart, fingerHeart];
    this.currentIndex = 0;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(width);
      this.y = random(height);
    }
  }

  display() {
    if (this.clicked) {
      if (this.currentIndex === this.rotationImages.length) {
        image(this.defaultImage, this.x, this.y, this.w, this.h);
      } else {
        image(
          this.rotationImages[this.currentIndex],
          this.x,
          this.y,
          this.w,
          this.h
        );
      }
    } else {
      image(this.defaultImage, this.x, this.y, this.w, this.h);
    }
  }

  checkMouseInteraction() {
    const d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 100) {
      if (this.clicked) {
        this.currentIndex =
          (this.currentIndex + 1) % (this.rotationImages.length + 1);
      }
      this.clicked = !this.clicked;
      this.xSpeed = random(-3, 3);
      this.ySpeed = random(-3, 3);
    }
  }
}
