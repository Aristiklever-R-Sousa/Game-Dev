class Game {
  constructor() {
    this.indice = 0;
    this.map = fita.map;
  }

  setup() {
    soundGame.loop();
    scenario = new Scenario(imgScenario, 3);
    points = new Points();
    life = new Life(fita.config.maxLife, fita.config.currentLife);
    person = new Person(matrizPerson, imgPerson, 10, 30, 110, 135, 220, 270);

    const gotEnemy = new Enemy(matrizGotEnemy, imgGotEnemy, width, 30, 52, 52, 104, 104, 10),
      flyGotEnemy = new Enemy(matrizFlyGotEnemy, imgFlyGotEnemy, width, 200, 100, 75, 200, 150, 10),
      trollEnemy = new Enemy(matrizTrollEnemy, imgTrollEnemy, width, 0, 200, 200, 400, 400, 15);

    enemies.push(gotEnemy);
    enemies.push(flyGotEnemy);
    enemies.push(trollEnemy);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      person.jump();
      soundJump.play();
    }
  }

  draw() {
    scenario.exibe();
    scenario.move();

    points.exibe();
    points.addPoints();

    person.exibe();
    person.applyGravity();

    life.draw();
    
    const currentLine = this.map[this.indice];
    const enemy = enemies[currentLine.enemy];
    const visibleEnemy = enemy.x < -enemy.largura;
    enemy.velo = currentLine.velo;

    enemy.exibe();
    enemy.move();

    if (visibleEnemy){
      this.indice = parseInt(random(0, this.map.legth));
      enemy.aparece();
    }
    
    if (person.collided(enemy)) {
      person.isInvincible();
      
      if(!life.perdeu()){
        setTimeout(() => {
          image(imgGameOver, width / 2 - 200, height / 3);
          soundGame.pause();
          noLoop();
        }, 40);
      }
    }
  }
}