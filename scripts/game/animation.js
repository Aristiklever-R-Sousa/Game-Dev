class Animation {
  constructor(matriz, img, x, variationY, largura, altura, larguraSprite, alturaSprite){
    this.matriz = matriz;
    this.img= img;
    //Tamanho da imagem:
    this.largura = largura;
    this.altura = altura;
    //Posição do Sprite(img do personagem) no Cenário:
    this.x = x;
    this.variationY = variationY;
    this.y = height - this.altura - this.variationY;
    //Tamanho do Sprite desejado:
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
  }
  
  exibe() {
    image(this.img, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.change();
  }
  
  change() {
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1)
      this.frameAtual = 0;
  }
  
}