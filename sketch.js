const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var bgImg;
var engine,world,snowFall = [];
var noOfFlakes = 100;

function preload(){
  bgImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  for(var count = 0;count< noOfFlakes ; count++){
      var snowFlake = new Snow(random(20,windowWidth-20),random(0,windowHeight-20));
      snowFall.push(snowFlake);
  }
  

}

function draw() {
  background(bgImg);  

  Engine.update(engine);

  for(var count = 0;count< noOfFlakes ; count++){
    snowFall[count].display();
    snowFall[count].update();
  }
  
}