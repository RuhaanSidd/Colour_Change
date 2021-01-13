var canvas;
var music;
var box;
var disk1, disk2, disk3, disk4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
    disk1 = createSprite(100,600,150,20);
    disk1.shapeColor = "red";
    disk2 = createSprite(300,600,150,20);
    disk2.shapeColor = "blue";
    disk3 = createSprite(500,600,150,20);    
    disk3.shapeColor = "yellow";
    disk4 = createSprite(700,600,150,20);
    disk4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(400,400,20,20);
    box.velocityX = 5;
    box.velocityY = 4;
    box.shapeColor = "white";

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(disk1.isTouching(box)){
       box.shapeColor = "red";
       box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(disk2.isTouching(box) && box.bounceOff(disk2)){
        box.shapeColor = "blue";
        music.play();
     }
     if(disk3.isTouching(box) && box.bounceOff(disk3)){
        box.shapeColor = "yellow";
        music.play();
     }
     if(disk4.isTouching(box) && box.bounceOff(disk4)){
        box.shapeColor = "green";
        music.play();
     }


    drawSprites();
}
