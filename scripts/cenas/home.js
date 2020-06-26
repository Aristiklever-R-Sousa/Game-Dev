class Home {
  constructor(){
    
  }
  
  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }
  
  _backgroundImage(){
    image(imgHome, 0, 0, width, height);
  }
  
  _text(){
    textFont(fontHome);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, height/3);
    textSize(120);
    text('Hipsta', width/2, height/5 * 3);
  }
  
  _button(){
    gerentButton.y = height / 7 * 5;
    gerentButton.draw();
  }
}