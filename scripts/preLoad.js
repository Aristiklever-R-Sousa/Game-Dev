function preload(){
  fita = loadJSON('fita/fita.json');
  imgHome = loadImage('imagens/assets/telaInicial.png');
  fontHome = loadFont('imagens/assets/fonteTelaInicial.otf');
  imgScenario = loadImage('imagens/cenario/floresta.png');
  imgPerson = loadImage('imagens/personagem/correndo.png');
  imgHeart = loadImage('imagens/assets/coracao.png');
  imgGotEnemy = loadImage('imagens/inimigos/gotinha.png');
  imgFlyGotEnemy = loadImage('imagens/inimigos/gotinha-voadora.png');
  imgTrollEnemy = loadImage('imagens/inimigos/troll.png');
  imgGameOver = loadImage('imagens/assets/game-over.png');
  
  soundGame = loadSound('sons/trilha_jogo.mp3');
  soundJump = loadSound('sons/somPulo.mp3');
}