const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,engine,world;

var plinkos = {};
var particles = {};
var divisions= {};

var divisionsHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,685,1200,20);
  
  for (var i = 0; i<=width; i= i+80) {
    divisions.push(new Division(i,height-divisionsHeight/2, 10, divisionsHeight));
}
  
Engine.run(engine);
}



function draw() {
  background("black");  
  Engine.update(engine);

ground.display();

for (var n = 0; n<divisions.length; n++) {
  divisions[n].display();
}

}