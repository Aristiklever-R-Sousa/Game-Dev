class Enemy extends Animation {
  constructor(matriz, img, x, variationY, largura, altura, larguraSprite, alturaSprite, velocity){
    super(matriz, img, x, variationY, largura, altura, larguraSprite, alturaSprite);
    
    this.velo = velocity;
    this.x = width;
  }
  
  move(){
     this.x -= this.velo;
  }
  
  aparece() {
    this.x = width;
  }
}