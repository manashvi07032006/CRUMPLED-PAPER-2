const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, paper, dustbin;

function setup(){
	var canvas = createCanvas (1600, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	dustbin = new Sides (1200, 500);
	paper = new Paper(200, 200, 20);
	
	Engine.run(engine);
}
function draw(){
	background(0);
	ground.display();
	paper.display();
	dustbin.display();
	
}
	
	function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
	}
}