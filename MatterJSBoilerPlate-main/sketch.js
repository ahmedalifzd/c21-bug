
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var wall1
var wall2

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ball_options={
	restitution:0.3,
	friction:0,
	density:1.2
   }
   ball = Bodies.circle(260,100,20,ball_options)
 
   ground = new Ground(width/2,670,width,20)
   wall1 = new Ground(1100,600,20,120)
   wall2 = new Ground(1350,600,20,120)


	Engine.run(engine);


}



function draw() {
  rectMode(CENTER);
  background(0);
  
 ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  wall1.display()
  wall2.display()
  drawSprites();
 
}

function keyPressed(){

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}

}
