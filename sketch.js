
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, bottom;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 500);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	paper = new Paper(100,450,10);
	ground = new Ground(600,height,3000,20);
	bottom = new Bottom(1389,485,150,10);
	sides1 = new Sides(1310,450,10,70);
	sides2 = new Sides(1468,450,10,70);



	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paper.display();
  ground.display();
  bottom.display();
  sides1.display();
  sides2.display();
 
 
}

function keyPressed(){
 if(keyCode === 32){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
 }
}




