class Life {
  constructor(total, initial){
    this.total = total;
    this.lives = this.initial = initial;
    
    this.largura = 25;
    this.altura = 25;
  }
  
  draw() {
    for(let i = 0; i < this.lives; i++){
      const margem = i * this.largura;
      const position = 20 * (i + 1);
      image(imgHeart, position + margem, 20, this.largura, this.altura);
    }
  }
  
  ganhou(){
    if(this.lives <= this.total)
      this.lives++;
  }
  
  perdeu() {
    return --this.lives;
  }
}