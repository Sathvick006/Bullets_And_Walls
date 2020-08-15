var bullet1, bullet2, bullet3;
var wall;

function setup() {
   createCanvas(1600,800);

   wall = createSprite(1400,400,60,700);

   bullet1 = createSprite(200,100,25,25);
   bullet1.weight = 2260;
   bullet1.speed = bullet1.velocityX = 60;

   bullet2 = createSprite(200,250,25,25);
   bullet2.weight = 1522;
   bullet2.speed = bullet2.velocityX = 50;

   bullet3 = createSprite(200,400,25,25);
   bullet3.weight = 3000;
   bullet3.speed = bullet3.velocityX = 45;
}

  function draw() {
    background("white");

    var deformation1 = 0.5 * 60 * 60 * 2260 / 22500
    var deformation2 = 0.5 * 50 * 50 * 1522 / 22500
    var deformation3 = 0.5 * 45 * 45 * 3000 / 22500

    if(wall.x - bullet1.x < bullet1.width/2 + wall.width/2 && deformation1 > 180){
    bullet1.shapeColor = "red";
    bullet1.speed = bullet1.velocityX = 0;
    }

    if(wall.x - bullet2.x < bullet2.width/2 + wall.width/2 && deformation2 < 90){
     bullet2.shapeColor = "green";
     bullet2.speed = bullet2.velocityX = 0;
     }

     if(wall.x - bullet3.x < bullet3.width/2 + wall.width/2 && deformation3 < 180){
          bullet3.shapeColor = "yellow";
          bullet3.speed = bullet3.velocityX = 0;
          }
          
  drawSprites();

  }
