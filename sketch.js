
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var roof;

var bob1, bob2, bob3, bob4, bob5

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2, height/4,width/4,20)
	var startBobPositionX = width/2;

	var startBobPositionY = height-50;
	var bobDiameter = 60;

	//bob2 = new Bob(100,30,50);
	bob1 = new Bob(startBobPositionX - bobDiameter*2,startBobPositionY , bobDiameter)
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 =new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	console.log("bob1",bob1.body.position.x);

	console.log("bob2", bob2.body.position.x);
	
	console.log("bob3", bob3.body.position.x);

	console.log("bob4", bob4.body.position.x);

	console.log("bob5", bob5.body.position.x);
	rope1 = new Chain(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Chain(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Chain(bob3.body,roof.body,0,0);
	rope4 = new Chain(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Chain(bob5.body,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 roof.display();
 bob1.display();

 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();

 rope3.display();


 rope4.display();

 rope5.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45});

	}
}
