//Declare global variables

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var sup ;

var fireball;

var fireballGroup;



var invisbleGround;

var survivalTime=0;

var bg;






function preload(){
  
  //Load animations and images
  
  supImage =             
  loadImage("sup.png");
  
 fireBallImage = loadImage("fireball.png");
  
  
  bg = loadImage ("sky.png");
  
  //groundImage = loadImage ("ground.jpeg");
  
}



function setup() {
  
  //create canvas
  
  createCanvas(600,600);

  
  // create monkey
  
  sup=createSprite(200,200,100,100);
  sup.addImage(supImage);
  
  
  sup.scale=0.1
  
  
  //create ground
  
  ground=createSprite(400,450.02,900,200);
  
  ground.x = ground.width/2;
  
  console.log(ground.x);
  
  //create scrolling ground
  
  if(ground.x===ground.x/2){
    
    ground.x=ground.width/2;
    
  }
 
  }


function draw() {
  
  //background
  
  background(bg);
  
  //if space key is pressed monkey jump 
  
  if(keyDown("space")&& sup.y >= 100) {
    
  sup.velocityY = sup.velocityY-0.5;
  
  }

  if(keyDown(DOWN_ARROW)) {
    
    sup.velocityY = sup.velocityY+0.5;
    
    }
  
  //Give gravity
  
  sup.velocityY = sup.velocityY + 0.008
  
  //monkey should stay on the ground
  
  sup.collide(ground);
  
  // score and Survival Time
  
  // score
  
  
  //Survival Time
  
  stroke("black");
  
  textSize=20;
  
  fill("black");
  
  survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time:  "+ survivalTime,100,50);
  
  
  // Spawn bananas
  
  spawnFireball();
  
  //Spawn obstacles
  
 
  
  //Add banana group
  
  fireballGroup= new Group();
  
  //Add obstacles group
  
  
  
  //draw sprites
  
  drawSprites();
  
}

//spawn banana function

function spawnFireball(){
  
  if(frameCount % 80 === 0){
    
    fireball=createSprite(500,315,1,1);
    
    fireball.y=Math.round(random(120,200));
    
    fireball.addImage(fireBallImage);
    
    fireball.scale=0.1;
    
    fireball.velocityX=-3
    
    fireball.lifetime=150;
    
    fireballGroup.add(fireball);
   
  }
  
}







