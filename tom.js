
function preload() {
    //load the images here
garden=loadImage(" images/garden.png");
cat1=loadAnimation("images/cat1.png")
cat2=loadAnimation("images/cat2.png","images/cat3.png");
cat3=loadAnimation("images/cat4.png")
mouse1=loadAnimation("images/mouse1.png")
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
jerry=createSprite(200,600,10,20);
jerry.addAnimation("mouse1",mouse1)
jerry.scale=0.15;
jerry.debug=true
jerry.setCollider("rectangle",0,0,jerry.width/2,jerry.height)

tom=createSprite(870,600,20,10);
tom.addAnimation("tom1",cat1)
tom.scale=0.2;
tom.debug=true;
tom.setCollider("rectangle",0,0,tom.width/2,tom.height)
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<=tom.width/2+jerry.width/2){
    jerry.addAnimation("mouse3",mouse3)
    jerry.changeAnimation("mouse3")
    tom.addAnimation("cat3",cat3)
    tom.changeAnimation("cat3")
    tom.velocityX=0;
    tom.scale=0.2;
    jerry.scale=0.15;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==LEFT_ARROW){
    tom.velocityX=-2;
    tom.addAnimation("tom2",cat2)
    tom.changeAnimation("tom2")
    jerry.addAnimation("mouse2",mouse2)
    jerry.changeAnimation("mouse2")
}



}
