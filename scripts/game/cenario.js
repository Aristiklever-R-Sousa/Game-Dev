class Scenario {
  constructor(img, velo) {
    this.img = img;
    this.velo = velo;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
    image(this.img, this.x1, 0, width, height);
    image(this.img, this.x2, 0, width, height);
  }
  
  move() {
    this.x1 -= this.velo;
    this.x2 -= this.velo;
    
    if(this.x1 < -width)
      this.x1 = width;
    
    if(this.x2 < -width)
      this.x2 = width;
    
  }
}

