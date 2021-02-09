const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var chain;
var polygon, polygonImage;
var mainGround, ground1;

var score = 0;

var bg = "black";

var gameState = "start";

function preload(){
    polygonImage = loadImage("polygon.png");
    getTime();

}

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //level1
    box1 = new Box(650,250);
    //level2
    box2 = new Box(650,320);
    box3 = new Box(700,320);
    box4 = new Box(600,320);
    //level3
    box5 = new Box(650,390);
    box6 = new Box(700,390);
    box7 = new Box(600,390);
    box8 = new Box(750,390);
    box9 = new Box(550,390);
    //level4
    box10 = new Box(650,460);
    box11 = new Box(700,460);
    box12 = new Box(750,460);
    box13 = new Box(600,460);
    box14 = new Box(550,460);
    box15 = new Box(500,460);
    box16 = new Box(800,460);

    //level1
    box17 = new Box(1140,100);
    //level2
    box18 = new Box(1140,170);
    box19 = new Box(1190,170);
    box20 = new Box(1090, 170);
    //level3
    box21 = new Box(1140,240);
    box22 = new Box(1190,240);
    box23 = new Box(1090,240);
    box24 = new Box(1240,240);
    box25 = new Box(1040,240);

    mainGround = new Ground(width/2,height,width,20);
    
    ground1 = new Ground(650,505,390,20);
    ground2 = new Ground(1140,285,290,20);

    polygon = Bodies.circle(150,300,40);
    World.add(world,polygon);

    chain = new Chain(this.polygon,{x : 150, y : 300});
    
}

function draw(){
    Engine.update(engine);
    background(bg);
    
    rectMode(CENTER);
    imageMode(CENTER);

    chain.display();

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
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    fill("black");
    textSize(20);
    strokeWeight(2);
    text("Score : " + score, 1000, 50);

    mainGround.display();

    ground1.display();
    ground2.display();

    image(polygonImage,polygon.position.x,polygon.position.y,60,60);
    

    if(gameState === "play"){
        fill("green");
        textSize(20);
        strokeWeight(5);
        text("Press SPACE to try again..",1000,550);

    }

}

function mouseDragged(){
    if(gameState === "start"){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

    }
}

function mouseReleased(){
    chain.fly();
    gameState = "play";
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(this.polygon);

    }
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata.json");
    console.log(response);
    var JSON = await response.json();
    console.log(JSON);
    var dt = JSON.datetime;
    console.log(dt);
    var hour = dt.slice(11,13);
    console.log(hour);

    if(hour > 06 && hour < 18){
        bg = "black";
    }
    else{
        bg = "lightblue";
    }
}