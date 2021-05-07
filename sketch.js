var PLAY  = 0;
var END   = 1;
var gameState = PLAY;
var player   ,playerImage;
var road     ,roadImage;
var ground;
var obstacles,obstacleGroup;
var obstacle1,obstacleImg1;
var obstacle2,obstacleImg2;
var obstacle3,obstacleImg3;
var obstacle4,obstacleImg4;
var score = 0;
var r;






function preload(){
  
roadImage     = loadImage("b1.png");
playerImage   = loadImage("mrace1.png");
obstacleImg1  = loadImage("ob1.png");
obstacleImg2  = loadImage("ob2.png");
obstacleImg3  = loadImage("ob3.png");

}

function setup(){
  
createCanvas(displayWidth+20,displayHeight);
//fill("black")
ground = createSprite(15,300,1000,10);
ground.addImage(roadImage);
ground.scale = 1.8;
ground.x = ground.width /2;

road = createSprite(300,598,1000,5);
road.visible = false;

player = createSprite(100,415,10,10);
player.addImage(playerImage);
player.scale = 0.5;
//player.debug=true;
  obstacle.debug=true;
  player.setCollider("circle",0,0,130)
obstacleGroup = new Group();

}

function draw(){
background("black");
 
if(gameState === PLAY){

if(keyDown("space")){
player.velocityY = -6;
} 
player.velocityY= player.velocityY+0.8;


ground.velocityX= -6;
if(ground.x<0){
ground.x= ground.width/2;
}
  
//road.velocityX= -4;
/*if(road.x<0){
road.x = road.width/2;
}*/

  

obstacle();

   
if(obstacleGroup.isTouching(player)){
gameState = END;
} 
  
}
 
  
if(gameState === END) {
fill("black");
text("gameover",50,300);
obstacleGroup.setVelocityXEach(0);
player.velocityX = 0;
player.velocityY = 0;
ground.velocityX = 0;

obstacleGroup.setLifetimeEach(-1); 
}
 
  
  
  
  player.collide(road);
drawSprites();
}


function obstacle(){
if(frameCount%50===0){
obstacles = createSprite(590,490,10,10);
     r=Math.round(random(1,3));
    if (r === 1) {
      obstacles.addImage(obstacleImg1);
    } else if (r ===2) {
      obstacles.addImage(obstacleImg2);
    } else if (r === 3){
      obstacles.addImage(obstacleImg3);
    } 
obstacles.y  = Math.round(random(150,470));
  //console.log(obstacles.x);
  //console.log(r)
obstacles.scale = 0.5;
//player.collide(obstacles);
obstacles.lifetime = 200;
obstacles.depth = player.depth;
player.depth+=1;
obstacles.velocityX= -4;
  //obstacles.debug=true;

obstacles.setCollider("circle",0,0,20)
obstacleGroup.add(obstacles);

}
}