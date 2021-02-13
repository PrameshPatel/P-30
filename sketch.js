
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14;
var box15,box16;
var ball;
var rope;
    


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(900,500,400,20);
  ground2 = new Ground(600,650,1300,20);
	box1 = new Box(1050,300,50,50);
	box2 = new Box(1000,300,50,50);
	box3 = new Box(950,300,50,50);
	box4 = new Box(900,300,50,50);
	box5 = new Box(850,300,50,50);
	box6 = new Box(800,300,50,50);
	box7 = new Box(750,300,50,50);

	box8 = new Box(1000,300,50,50);
	box9 = new Box(950,300,50,50);
	box10 = new Box(900,300,50,50);
	box11 = new Box(850,300,50,50);
	box12 = new Box(800,300,50,50);

    box13 = new Box(950,300,50,50);
    box14 = new Box(900,300,50,50);
    box15 = new Box(850,300,50,50);

	box16 = new Box(900,300,50,50);

	ball = new Ball(400,500,70,70);

	rope = new Rope(ball.body,{x:300,y:400})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball.display();
  rope.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
  rope.attach(ball.body);
  } 
}