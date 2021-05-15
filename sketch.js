var shrub1, shrub2, groundHoles;
var ambulance, ambulanceImg;
var player, girl, boy;
var timeLimit, hospital;
var canvas;
var gameState="wait";
var playbutton, playbuttonImg;
var timer=180;

function preload(){
    ambulanceImg = loadImage("images/ambulance1.jpg");

    shrub1 = loadImage("images/shrub1.jpg");
    shrub2 = loadImage("images/shrub2.jpg");
    
    girl = loadAnimation("images/girl1.jpg","images/girl2.jpg","images/girl3.jpg",
    "images/girl4.jpg","images/girl5.jpg","images/girl6.jpg",
    "images/girl7.jpg","images/girl8.jpg");
    
    boy = loadAnimation("images/boy1.jpg","images/boy2.jpg","images/boy3.jpg",
    "images/boy4.jpg","images/boy5.jpg","images/boy6.jpg","images/boy7.jpg",
    "images/boy8.jpg","images/boy9.jpg","images/boy10.jpg","images/boy11.jpg","images/boy12.jpg");

    hospital = loadImage("images/hospital.jpg");

    playbuttonImg = loadImage("images/start.jpg");

}

function setup(){
    canvas=createCanvas(windowWidth-10,windowHeight-20);
    playbutton=createSprite(windowWidth/2,windowHeight/2,30,30);
    playbutton.addImage(playbuttonImg);
  //  player=createSprite(displayWidth/2, displayHeight-50, 20,20);
}
 function draw(){
     background("#f2bf32");

//Displaying the rules
     if(gameState==="wait"){
         fill("blue");
        textSize(30);
        text("Saving the Patient", windowWidth/2-50, 40);
        fill("black");
        textSize(20);
        text("1) Take patient to hospital via ambulance .",windowWidth/3,windowHeight/4);
        text("2) Avoid obstacles, traffic.",windowWidth/3,windowHeight/3);
        text("3) Press Arrow keys to control player, START button to continue.",windowWidth/3,windowHeight/2.5);
        fill("red");
        textSize(25);
        text("TIME IS LIMITED!!",windowWidth/2,500);
        if(mousePressedOver(playbutton)){
            gameState="start";
          }
     }

if(gameState==="start"){
    playbutton.x=2000;
    textSize(16);
  fill("black")
  text("TIME REMANING:"+Math.round(timer),windowWidth/2,50);
}
     
    
     drawSprites();
 }

