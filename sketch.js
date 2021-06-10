var astronaut;
var obstacle1;


function setup() {
  createCanvas(800,1200);
  astronaut = createSprite(400,1100);
}

function draw() {
  background(180); 
  levelOneObstacles();


  astronaut.velocityY = -5;
  if(keyDown("left_arrow")){
    astronaut.x = astronaut.x-2;
    astronaut.velocityY = 0;
  }

  if(keyDown("right_arrow")){
    astronaut.x = astronaut.x+2;
    astronaut.velocityY = 0;
  }
  
  drawSprites();
}

function levelOneObstacles(){
if(World.frameCount%80 ===  0){
  obstacle1 = createSprite(200,200,20,20);

  position = Math.round(random(1,2));
  if(position === 1){
    position.x = 0;
    obstacle1.velocityX = 5;
  }
  else if(position ===  2){
    position.x = 800;
    console.log("right");
    obstacle1.velocityX = -5;
  }
}

}