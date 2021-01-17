const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);

    ball1= new Box(290,10,65,65);

    dragon = new Ball(100,120,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ball1.display();
    dragon.display();
}