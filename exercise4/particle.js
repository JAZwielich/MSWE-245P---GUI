// code and inspiration from:
// https://youtu.be/MfxBfRD0FVU
class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // update the size of the element we render
    update() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
    }
  
    // render the element on the screen
    // by default the shape will be a point/circle
    show() {
      stroke(255);
      strokeWeight(25);
      point(this.x, this.y);
    }
  }