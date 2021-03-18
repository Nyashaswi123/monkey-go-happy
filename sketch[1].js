
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime;
function preload(){
  
monkey_running =  loadAnimation("sprite_0.png","sprite_1.png",
  "sprite_2.png","sprite_3.png","sprite_4.png",
  "sprite_5.png","sprite_6.png",
  "sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 

  
  
  
}



function setup() {
  createCanvas(600,350);
  score=0;
  survivalTime=0;
  
  //creating monkey
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground =createSprite(400,350,900,10); 
  ground.velocityX=-4;
  ground.X=ground.width/2;
  console.log(ground.X);
 FoodGroup=new Group()
obstacleGroup=new Group() 
}


function draw() {
 background("green");
  
  if(keyDown("space")&& monkey.y>= 200){
    monkey.velocityY=-10          
  }
  monkey.velocityY=monkey.velocityY+0.4
  monkey.collide(ground)
  
  
  ground.x=ground.width/2;
  
  if(World.frameCount%80===0){
    fruits()
  }
  if(World.frameCount%300===0){
   obstacles()
  } 
  
 if(monkey.isTouching(FoodGroup)) {
   score=score+1;
   FoodGroup.destroyEach();
 }
  if(obstacleGroup.isTouching(monkey)) {
    ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);

 }
  
  
  drawSprites();
  score=score+1;
  stroke("white");
  textSize(15);
  fill("white");
  text("score: "+score,380,30);
  
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime=Math.ceil(getFrameRate()/2);
  text("Survival Time: "+ survivalTime,440,30);
  
  survivaltime=0;
  score=0;
  
}

function fruits(){
  banana=createSprite(600,Math.round(random(120,200)),20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-2;
  FoodGroup.add(banana);
}
function obstacles(){
  obstacle=createSprite(300,Math.round(random(330,335)),20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-2;
  obstacleGroup.add(obstacle);
}