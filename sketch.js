var fixedRct;
var movingRect;
var o1;
var o2;


function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 fixedRct = createSprite(400,100,20,20);
 o1 = createSprite(200,200,20,30);
 o2 = createSprite(200,100,20,30);
  o2.velocityY = 5;
 o1.velocityY = -5;
}

function draw() {

  background(255,255,255);  

movingRect.x = mouseX
movingRect.y = mouseY

boff(o1,o2);

if(gc(o1,o2)) {
  o1.shapeColor = "red";
  o2.shapeColor ="blue";  
}
else {
  o1.shapeColor = "pink";
  o2.shapeColor ="pink";  
}

  drawSprites();
}

function gc(a,b) {
  if (a.x-b.x <= a.width/2+b.width/2 && 
    b.x-a.x < a.width/2+b.width/2 &&
     a.y-b.y <= a.height/2+b.height/2 && 
    b.y-b.y < a.height/2+b.height/2){

      return true;
}

else {
  return false;
}

}

function boff(a,b) {
  if (a.x-b.x <= a.width/2+b.width/2 && 
    b.x-a.x < a.width/2+b.width/2){
    b.velocityX = b.velocityX - 2*b.velocityX;
    a.velocityX = a.velocityX - 2*a.velocityX;
}
if ( a.y-b.y <= a.height/2+b.height/2 && 
  b.y-b.y < a.height/2+b.height/2) {
    a.velocityY = a.velocityY - 2*a.velocityY;
    b.velocityY = b.velocityY - 2*b.velocityY;
  }
}