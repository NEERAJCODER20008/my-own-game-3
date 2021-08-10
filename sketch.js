const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var lowSpeed=[];
var danger=[];
var bonus=[];
var speedBoost=[];
var score =0;

var img1,sb
var img2,ls
var img3,bs
var img4,de
var playImg,play


var gameState=0;
var gamestate="play"


function preload(){
img1=loadImage("images/speed boost icon.png")
img2=loadImage("images/low speed icon.png")
img3=loadImage("images/bonus.png");
img4=loadImage("images/danger icon.png");
playImg=loadImage("images/play.png")

}

function setup() {

  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
 
 ball=new Ball()

 sb=createSprite(150,420)
 sb.addImage("sb",img1)
sb.visible=false
sb.scale=0.1

ls=createSprite(150,490)
 ls.addImage("ls",img2)
ls.visible=false
ls.scale=0.1

bs=createSprite(150,560)
 bs.addImage("bs",img3)
bs.visible=false
bs.scale=0.1

de=createSprite(150,630)
 de.addImage("de",img4)
de.visible=false
de.scale=0.1

play=createSprite(400,375)
play.addImage("play",playImg)
play,visible=false;
play.scale=0.3

  
}
 


function draw() {
  if(gameState===0){
    background(0)
    drawSprites()
    fill("white")
    textSize(45)
    text("Tip Tap Top",200,50)

    fill("white")
    textSize(30)
    text("Press play To Start",150,200)
    play.visible=true;

    if(mousePressedOver(play)){
      gameState=1
    }

  }

  if(gameState===1){

    play.visible=false

    background(0)
    drawSprites()
    fill("white")
    textSize(45)
    text("Tip Tap Top",200,50)

    fill("blue")
    textSize(35)
    text("Rules to play",100,200)
    text("-------------",100,220)
    
    fill("yellow")
    textSize(25)
    text("1. Use the mouse arrow to move the player",100,250)
    text("2. Ball is the player",100,280)
    text("3. Tiles are the obstacles.Beware of them",100,310)
    text("4. You have three chances to win ",100,340)
    text("5. Following are the boosters ",100,370)
    bs.visible=true
    text("--> This will increase the score by 100",200,420)
    ls.visible=true
    text("--> This will slow down the speed of the tile",200,490)
    sb.visible=true
    text("--> This will increase the speed of the tile",200,560)
    de.visible=true
    text("--> This will reduce your life",200,630)

    fill("red")
    textSize(30)
    text("Press P to Continue",300,700)

    if(keyDown("p")){
      gameState=2
    }



    
  }

  if(gameState===2){

    background("black");
    textSize(30)
    fill("white")
    text("Score: " +score,100,100)
  

  if(gamestate==="play"){
    


  

 
  if(frameCount%2===0){
    score+=1
  }
  Engine.update(engine);
 
 ball.display() 
 

  //create the particles using frameCount
  if (frameCount%60===0){
    particles.push(new Particles(random(50,750),0))
  }


  //display the particles \
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

 if (frameCount%500===0){
  lowSpeed.push(new LowSpeed())
  }

  for (var k = 0; k < lowSpeed.length; k++) {
    lowSpeed[k].display();
  }

  if (frameCount%910===0){
    danger.push(new Danger())
    }
  
    for (var l = 0; l < danger.length; l++) {
      danger[l].display();
    }

    if (frameCount%720===0){
      bonus.push(new Bonus())
      }
    
      for (var a = 0; a < bonus.length; a++) {
        bonus[a].display();
      }

      if (frameCount%375===0){
        speedBoost.push(new SpeedBoost())
        }
      
        for (var b = 0; b < speedBoost.length; b++) {
          speedBoost[b].display();
        }
        if(score%200===0){
          for(var i =0; i<particles.length; i++){
            particles[i].velocity.Y+=10
          }
          
          
        }
      }
}
}