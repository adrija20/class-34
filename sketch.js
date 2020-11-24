const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var box1,ground;

function setup(){
    createCanvas(3000,900);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,3000,20);
    box1= new box(900,100,50,50);

}
    function draw (){
      background("white")
        Engine.update(engine);
        box1.display();
        ground.display();

    }