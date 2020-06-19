var side1,side2,side3,side4,covering,gameState,score

var player,pimg,wall,b = [],j = 1;
var food, foodimg,food2
var enemy1,e1img
var enemy2,e2img
var enemy3,e3img
var enemy4,e4img
var enemy5,e5img
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall1,wall12,wall13,wall14
var wall15,wall16, wall17,wall18

function preload(){
foodimg= loadImage("food.gif")
e1img = loadImage("ye.png")
e2img = loadImage("re.png")
e3img = loadImage("me.png")
e4img = loadImage("ge.png")
pimg = loadAnimation("sprite_0.png","sprite_1.png")

}



function setup() {
  createCanvas(665,400);
  gameState = "start";
  score = 0;
  for(var i=1;i<=30;i++){
 if(i<=16){
    b[i]=createSprite(35, 30+(20*i), 15, 15);
 }
    else{
    b[i]=createSprite(600, 30+(20*j), 15, 15);
    j++
  }
 }
 
   covering = createSprite(400,200,200,100);
  covering.shapeColor = "red"
   side1 = createSprite(400,150,200,5);
  side3 = createSprite(400,250,200,5);
  side2 = createSprite(300,200,5,100);
   side4 = createSprite(500,200,5,100);
   enemy1 = createSprite(225,125,20,20)
  
   enemy2 = createSprite(125,125,20,20) 
   enemy3 = createSprite(575,200,100,20,20)
   enemy4 = createSprite(775,300,20,20)
  
   enemy1.addImage(e1img)
   enemy2.addImage(e2img)
   enemy3.addImage(e3img)
   enemy4.addImage(e4img)
   enemy1.scale = 0.0175
   enemy2.scale = 0.06275
   enemy3.scale = 0.06275
   enemy4.scale = 0.06275
  
  wall1 = createSprite(75,400,10,700)
  wall2 =createSprite(125,0,10,200)
  wall3 = createSprite(175,400,10,200)
  wall4 = createSprite(225,0,10,200)
  wall5 = createSprite(275,400,10,700)
  wall6 = createSprite(325,0,10,200)
  wall7 = createSprite(375,400,10,200)
  wall8 = createSprite(425,400,10,200)
  wall9 =createSprite(475,0,10,200)
  wall10 = createSprite(525,400,10,700)
  wall11= createSprite(575,0,10,200)
  wall12 = createSprite(625,400,10,700)
  wall13 = createSprite(675,0,10,200)
  wall14 = createSprite(725,400,10,700)
  wall15 = createSprite(1,1,1,800)
  wall16 = createSprite(1,400,850,1)
  wall17 = createSprite(1,1,850,1)
  wall1.shapeColor = "blue";
  wall2.shapeColor = "blue";
  wall3.shapeColor = "blue";
  wall4.shapeColor = "blue";
  wall5.shapeColor = "blue";
  wall6.shapeColor = "blue";
  wall7.shapeColor = "blue";
  wall8.shapeColor = "blue";
  wall9.shapeColor = "blue";
  wall10.shapeColor = "blue";
  wall11.shapeColor = "blue";
  wall12.shapeColor = "blue";
  wall13.shapeColor = "blue";
  wall14.shapeColor = "blue";
  
                                                          
                                                               
  side1.visible = false  
  side2.visible = false
  side3.visible = false
  side4.visible = false
  player = createSprite(35,375 , 50, 50);
  player.addAnimation("pimg",pimg)
  player.scale = 1  
  
  food = createSprite(175,50,10,10)
  food.addImage(foodimg)

  food.scale = 0.5
  food2 = createSprite(400,50,10,10)
  food2.addImage(foodimg)
  food2.scale = 0.5
}

function draw() {
  background(0);
  createEdgeSprites();
  for(var i=1;i<=30;i++){
  if(player.isTouching(b[i])){
   console.log("hi") ;
  b[i].destroy(); 
  score++
  }
}
if(player.isTouching(enemy1)){
gameState = "end"

}
if(player.isTouching(enemy2)){
  gameState = "end"
  }
  if(player.isTouching(enemy3)){
   gameState = "end"
    
    }
    if(player.isTouching(enemy4)){
      gameState = "end"
      
      }
if(player.isTouching(wall1)){
  player.bounceOff(wall1)
  
  }
if(player.isTouching(wall2)){
  player.bounceOff(wall2)
  
  }
  if(player.isTouching(wall3)){
    player.bounceOff(wall3)
    
    }
    if(player.isTouching(wall4)){
      player.bounceOff(wall4)
      
      }
      if(player.isTouching(wall5)){
        player.bounceOff(wall5)
        
        }
        if(player.isTouching(wall6)){
          player.bounceOff(wall6)
          
          }
          if(player.isTouching(wall7)){
            player.bounceOff(wall7)
            
            }
            if(player.isTouching(wall8)){
              player.bounceOff(wall8)
              
              }
              if(player.isTouching(wall9)){
                player.bounceOff(wall9)
                
                }
                if(player.isTouching(wall10)){
                  player.bounceOff(wall10)
                  
                  }
                  if(player.isTouching(wall11)){
                    player.bounceOff(wall11)
                    
                    }
                    if(player.isTouching(wall13)){
                      player.bounceOff(wall13)
                      
                      }
                      if(player.isTouching(wall12)){
                        player.bounceOff(wall12)
                        
                        }
                        if(player.isTouching(wall14)){
                          player.bounceOff(wall14)
                          
                          }
                          if(player.isTouching(wall15)){
                            player.bounceOff(wall15)
                            
                            }
                            if(player.isTouching(wall16)){
                              player.bounceOff(wall16)
                              
                              }
                              if(player.isTouching(wall17)){
                                player.bounceOff(wall17)
                                
                                }
  if(gameState==="start"){
    textSize(10);
    text("Press Enter to start",15,25);

  }
  if(keyWentDown("enter")){
gameState = "play"
player.velocityY = -1

  }
  if(score>=45){
gameState = "end"
  }
  
  if(gameState==="end"){
player.destroy();
enemy1.destroy();
enemy2.destroy();
enemy3.destroy();
enemy4.destroy();
wall1.destroy();
wall2.destroy();  
wall3.destroy();
wall4.destroy();
wall5.destroy();
wall6.destroy();
wall7.destroy();
wall8.destroy();
wall9.destroy();
wall10.destroy();
wall11.destroy();
wall12.destroy();
wall13.destroy();
wall14.destroy();
covering.destroy();

textSize(35)
fill("gold")
text("Provide Food to The Poor People",50,100)

}
  
  
  
  
  
  if(gameState==="play"){
enemy1.velocityY = 1.5
enemy2.velocityY = 1.5
enemy3.velocityX = -1.5
enemy4.velocityX = 1.5
  }
  if(enemy3.isTouching(wall6)){
enemy3.bounceOff(wall6)

  }
  if(enemy3.isTouching(wall9)){
    enemy3.bounceOff(wall9)
    
      }
  if(player.isTouching(food)){
    score = score + 10
    food.destroy();
   }
   if(player.isTouching(food2)){
    score = score + 10
    food2.destroy();
   }
 if(enemy1.isTouching(covering)){
enemy1.x = 125
enemy1.y = 125


 }
 if(enemy2.isTouching(covering)){
  enemy2.x = 325
  enemy2.y = 125
  
  
   }
   if(enemy3.isTouching(covering)){
    enemy3.x = 775
    enemy3.y = 375
    
    
     }
     if(enemy4.isTouching(covering)){
      enemy4.x = 625
      enemy4.y = 125
      
      
       }
       if(enemy1.x>800||enemy1.x<0||enemy1.y>400||enemy1.y<0){
        enemy1.x = 225
        enemy1.y = 125
       
        
         }
         if(enemy4.x>800||enemy4.x<0||enemy4.y>400||enemy4.y<0){
          enemy4.x = 775
          enemy4.y = 375
          

          
           }
           if(enemy3.x>800||enemy3.x<0||enemy3.y>400||enemy3.y<0){
            enemy3.x = 575
            enemy3.y = 100
           
             }
             if(enemy2.x>800||enemy2.x<0||enemy2.y>400||enemy2.y<0){
              enemy2.x = 125
              enemy2.y = 125
               
              
               }
 if(player.isTouching(side1)||player.isTouching(side2)||player.isTouching(side3)||player.isTouching(side4)){
player.x = 400
player.y = 350
player.velocityY = 0
player.velocityX = 0


 }
  
  if(keyWentDown(LEFT_ARROW)){
player.velocityX = -1 
player.velocityY = 0


  }
  if(keyWentDown(UP_ARROW)){
    player.velocityX = 0
    player.velocityY = -1 
    
    
      }
      if(keyWentDown(RIGHT_ARROW)){
        player.velocityX = 1
        player.velocityY = 0 
        
        
          }
          if(keyWentDown(DOWN_ARROW)){
            player.velocityX = 0
            player.velocityY = 1 
           
            
              }
          if(keyWentDown("space")){
            player.velocityX = 0
            player.velocityY = 0 
            
            
              }
         
 
  
  drawSprites();
  textSize(35);
  fill(0)
  text("score: "+ score,335,210)
}