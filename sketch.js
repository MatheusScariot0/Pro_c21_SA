const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var left;
var right;
var top_wall;
var btn1;
var btn2;
var parede1;
var parede2;
function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.3,
    

  }
  ball = Bodies.circle(60, 100,20, ball_options);
  World.add(world, ball)
  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);
parede1 = new Ground(375,350,10,60);
parede2 = new Ground(325,350,10,60);
  btn1 = createImg("right.png");
  btn1.position(220, 30);
  btn1.size(50, 50);
  btn1.mouseClicked(Hforce)


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  parede1.show();
  parede2.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 10)
}

function Hforce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 })


  
}
