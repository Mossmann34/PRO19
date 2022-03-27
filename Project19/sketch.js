var MineImg, Mine;
var blueImg, blueGroup;
var Creep, CreepImg,CREEP;
var chao, chaoImg
var score=0;
var gameState = PLAY;
var PLAY = 1;
var END = 0;
var gameOver, gameOverImg;
var respawn, respawnImg;
var desproblema;


function preload(){
  MineImg = loadImage("Fundo.png");
  blueImg = loadImage("Obstacle.png");
  CreepImg = loadAnimation("Cree1.png", "Cree2.png", "Cree3.png");
  chaoImg = loadImage("chao.png");
  respawn = loadImage("respawn.png");
  gameOverImg = loadImage("gameOver.png");
  CREEP = loadImage("Creep4.png");
}

function setup() {
 createCanvas(650, 625);
 

 gameOver = createSprite(325,312);
 gameOver.scale = 10;

 Mine = createSprite(500,500);
 Mine.addImage("Mine",MineImg);
 Mine.velocityX = -0.15;

 chao = createSprite(width/2,height-1,width,20,50);
 chao.addImage("chão", chaoImg);
 chao.velocityX = -5;
 chao.scale=9;

 Creep = createSprite(100,100,20,50);
 Creep.addAnimation("runing", CreepImg);
 Creep.scale = 3;
 Creep.setCollider("rectangle",0,-2,10,20);

 gameOver.addImage("fim",gameOverImg);

 blueGroup = new Group();



 Creep.debug = false;

}

function draw() {

  score = score + Math.round(getFrameRate()/60);

  text("Pontuação: "+ score, 200,500,10,10);
  text.depth = Mine.depth;
  text.depth = text.depth + 1;
  textSize = 2;
  text.fill = red;

  gameOver.depth = Creep.depth;
  gameOver.depth = gameOver.depth + 1;

  if((keyDown("SPACE")) && Creep.y >= (height-125)) {
    Creep.velocityY = -12;
    touches = [];
  }

  score = score + Math.round(getFrameRate()/60);

  Creep.velocityY = Creep.velocityY + 0.8;
  Creep.collide(chao);


  if (chao.x < 100){
  chao.x = chao.width/1;
  }

  if (blueGroup.velocityX = -5){
    gameState = PLAY;
  }

  if (gameState === PLAY){
    gameOver.visible = false;
  }

  if (blueGroup.isTouching(Creep)){
    gameState = END;
  }

  if (gameState === END){
    gameOver.visible = true;
    Mine.velocityX = 0;
    Creep.velocityY = 0;
    chao.velocityX = 0;
    blueGroup.setVelocityXEach(0);
  }

  //console.log(gameState);

 BlueS();

drawSprites();
}


function BlueS() {
if(frameCount%70===0){
  var blue = createSprite(550,515,50,50);
  blue.addImage(blueImg);
  blue.velocityX = -5;
  blue.lifeTime = 800;
  blueGroup.add(blue);
  blue.depth = Mine.depth;
  blue.depth = blue.depth + 1;
  blue.debug = false;
  blue.scale = 2;
  blue.setCollider("rectangle",-10,10,25,25);

 }
}