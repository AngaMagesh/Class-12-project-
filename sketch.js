
var path, runner , leftBoundary,rightBoundary;
var pathImg,runnerImg;


function preload(){
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
//create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

runner= createSprite(180,340,30,30);
runner.scale=0.08;
runner.addAnimation("Runner",runnerImg);
  //making boundries
leftboundary=createSprite(0,0,100,800);
leftboundary.visible = false;


rightboundary=createSprite(410,0,100,800);
rightboundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  //making runner move where ever the x of my mouse is
  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  //colliding the Runner
  runner.collide(edges[3]);
  runner.collide(leftboundary);
  runner.collide(rightboundary);
  //creating The infinite road
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}