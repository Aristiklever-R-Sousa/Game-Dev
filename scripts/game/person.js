class Person extends Animation {
  constructor(matriz, img, x, variationY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, img, x, variationY, largura, altura, larguraSprite, alturaSprite);

    this.variationY = variationY;
    this.y = this.yInitial = height - this.altura - this.variationY;

    this.jumps = 0;
    this.jumpVelo = 0;
    this.jumpHeight = -50;
    this.gravity = 6;
    this.invincible = false;
  }

  jump() {
    if (this.jumps < 2) {
      this.jumpVelo = this.jumpHeight;
      this.jumps++;
    }
  }

  applyGravity() {
    this.y += this.jumpVelo;
    this.jumpVelo += this.gravity;

    if (this.y > this.yInitial) {
      this.y = this.yInitial;
      this.jumps = 0;
    }
  }
  
  isInvincible() {
    this.invincible = true;
    setTimeout(() => {
      this.invincible = false;
    }, 1000);
  }
  
  collided(enemy) {
    if(this.invincible)
      return false;
    
    const precision = 0.7;
    /*noFill();
    rect(this.x + 15,
      this.y + 15,
      this.largura * precision, 
      this.altura * precision);
    rect(enemy.x + 15, 
      enemy.y + 15, 
      enemy.largura * precision, 
      enemy.altura * precision);*/
    const collision = collideRectRect(
      this.x,
      this.y,
      this.largura * precision,
      this.altura * precision,
      enemy.x,
      enemy.y,
      enemy.largura * precision,
      enemy.altura * precision
    );

    return collision;
  }
}