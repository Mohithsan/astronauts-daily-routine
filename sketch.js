function preload() {
  bg = loadImage("Images/iss.png")
  sleep = loadAnimation("Images/sleep.png")
  brush = loadAnimation("Images/brush.png")
  gym = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
  move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");

}



function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut = addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;





  createSprite(400, 200, 50, 50);
}



function draw() {
  background(255,255,255); 
  //createEdgeSrites;
  //astronaut.bounceOff(edges)
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation( "brushing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation( "gymming");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation( "eating");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation( "bathing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation( "moving");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }
  drawSprites();
}