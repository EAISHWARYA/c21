var bullet ,wall,damage;

function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 30, 30);
 wall=createSprite(1200, 200, random(22,83), 150);
 bullet.shapeColor="white";
 wall.shapeColor=rgb(80,80,80);
 
bullet.weight=random(30,52);
 bullet.velocityX=random(223,321);

}

function draw() {
  background("black");  

  damage= Math.round(0.5* bullet.weight* bullet.velocityX * bullet.velocityX )/(wall.width*wall.width*wall.width);

  console.log(damage);
 if(bullet.collide(wall) ){
 if(damage<=3.68){
  wall.shapeColor="green";
 }
 else if(damage>=10 ) {
  wall.shapeColor="red";
 }
}
 bullet.collide(wall);
  drawSprites();
}



