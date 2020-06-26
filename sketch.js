function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  home = new Home();
  game = new Game();
  game.setup();
  cenas = {
    home,
    game
  };
  gerentButton = new GerentButton('INICIAR', width/2, height/2);
}

function keyPressed(){
  if(actualCena == 'game')
    game.keyPressed(key);
}

function draw() {
  cenas[actualCena].draw();
  
  //circle(mouseX, mouseY, 100);
}
