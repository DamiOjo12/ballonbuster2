var ground;
var bow;
var arrow;
var balloon;
var blueBalloon1,greenBalloon2, pinkBalloon3, redBalloon4;
var balloon1, balloon2, balloon3, balloon4;
var score = 0;

function preload(){
    //load all the images of game here.
    ground1 = loadImage("background0.png");
    bow1 = loadImage("bow0.png");
    arrow1 = loadImage("arrow0.png");
    blueBalloon1 = loadImage("blue_balloon0.png");
    greenBalloon2 = loadImage("green_balloon0.png");
    pinkBalloon3 = loadImage("pink_balloon0.png");
    redBalloon4 = loadImage("red_balloon0.png");
}



function setup() {
    createCanvas(595, 520);
    
//create the ground.
    ground = createSprite(400,125,600,600);
    ground.addImage("gro", ground1);
    ground.scale = 2.3;
    
//create the bow.
    bow = createSprite(584,300,10,10);
    bow.addImage("bo", bow1);
  
//make groups of balloons and arrow.
    redB = new Group();
    greenB = new Group();
    blueB = new Group();
    pinkB = new Group();
    arrowGroup = new Group();

}

function draw() {
//To make the ground moving.
    ground.velocityX = -1;
    if(ground.x<150){
      ground.x = ground.width/2;
    }
    
//To shoot an arrow.
    if(keyDown("space")){
      spawnArrow();
    }
    bow.y = mouseY;
  
//create different balloons at a particular interval of time.
    var select_sprites = Math.round(random(1, 4));
    if(frameCount%140 == 0){
    if(select_sprites == 1) {
        blue1();
    }
    }
    if(frameCount%140 == 0){
      if(select_sprites == 2){
      green2();
    }
    }
    if(frameCount%140 == 0){
    if(select_sprites == 3) {
      pink3();
    }
    }
    if(frameCount%140 == 0){
    if(select_sprites == 4) {
      red4();
    }  
    }
    
//To make sprites visible.
    drawSprites();
    
//create the score board.
    text("Score : " +score, 410, 50);      
}

//Create Blue balloon.
function blue1() {
    balloon1 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon1.addImage( blueBalloon1); 
    balloon1.velocityX = 3;
    balloon1.scale = 0.11;
    balloon1.lifetime = 180;
}

//Create Green balloon.
function green2() {
    balloon2 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon2.addImage( greenBalloon2); 
    balloon2.velocityX = 3;
    balloon2.scale = 0.09;
    balloon2.lifetime = 180;
}

//Create Pink balloon.
function pink3() {
    balloon3 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon3.addImage( pinkBalloon3); 
    balloon3.velocityX = 3;
    balloon3.scale = 1.2;
    balloon3.lifetime = 180;
}

//Create Red balloon.
function red4() {
    balloon4 = createSprite(0, Math.round(random(20, 370)), 10, 10);
    balloon4.addImage( redBalloon4); 
    balloon4.velocityX = 3;
    balloon4.scale = 0.09;
    balloon4.lifetime = 180;
}

//Create Arrow.
function spawnArrow(){
    arrow = createSprite(564,300,10,10);
    arrow.addImage("ar", arrow1);
    arrow.scale = 0.20;
    arrow.y = bow.y;
    arrow.velocityX = -4;
    arrow.lifetime = 135;
    if(arrow.x < 20){
      arrow.x = 564;
      arrow.velocity.X = 0;
    }
}
//End of the Code.
