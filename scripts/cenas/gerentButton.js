class GerentButton {
  constructor(texto, x, y){
    this.text = texto;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.mousePressed(() => this._changeCena());
    this.button.addClass('botao-tela-inicial');
  }
  
  draw (){
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }
  
  _changeCena() {
    this.button.remove();
    actualCena = 'game';
  }
}