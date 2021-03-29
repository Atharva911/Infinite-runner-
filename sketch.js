var bhoot,climber,door,ghost,tower,doori,climberi;
var wall
var climbergroup,doorgroup
var stopper,stoppergroup;
var playstate,gamestate=playstate,endstate;


function preload(){
  
  bhoot=loadImage("ghost-standing.png");
  wall=loadImage("tower.png");
  climberi=loadImage("climber.png")
  doori=loadImage("door.png");
  
}
    
function setup(){
  createCanvas(600,600)
  
  tower=createSprite(300,300,600,600)
  tower.addImage(wall);
  tower.velocityY=2;
  
  

  ghost=createSprite(300,300,10,10);
   ghost.addImage(bhoot);
  ghost.scale=0.4;
  
  climbergroup=new Group()
  
  doorgroup=new Group()
  
  stoppergroup=new Group()
  
}


function draw(){
  
  background("purple")

  
 
  
  
  if(gamestate===playstate){
    
   Game();
    
  
  
  if(climbergroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  

  
  if(tower.y>600){
    tower.y=300
  }  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      if(keyDown("space")){
    ghost.velocityY=-2  
  }
  
  ghost.velocityY=ghost.velocityY+1
  
  if(keyDown("LEFT_ARROW")){
    ghost.x=ghost.x-2
  }
  
  if(keyDown("RIGHT_ARROW")){
    ghost.x=ghost.x+2
    
}
     drawSprites();
    
      if(stoppergroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    
    gamestate=endstate
  }
  
  }
    
    
    
  
  else if(gamesatate===endstate){
    
    text("game over",230,250)
    
  }
  } 

function Game(){
if(frameCount%200===0){
  
  door=createSprite(200,0,15,15);
  door.addImage(doori)
  door.velocityY=2
  door.x=Math.round(random(100,500))
  door.lifetime=300;
  
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1
  
  climber=createSprite(200,70,20,20)
  climber.addImage(climberi)
  climber.velocityY=2
  climber.x=door.x
  climber.lifetime=300
  
  
   climbergroup.add(climber);
   doorgroup.add(door);
  
  stopper=createSprite(door.x,80,100,20);
  stopper.visible=true;
  stopper.velocityY=2;
  
  stoppergroup.add(stopper);
  
  
}
  
  
  
  
  
}


