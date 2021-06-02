var pic1, snowAnimation, snowFreeze1, snowFreeze2, snowFreeze1G, snowFreeze2G;

function preload(){
snowAnimation = loadImage("snow3.jpg")
snow2 = loadImage("snow2.jpg")
snowFreeze1Img = loadImage("snow4.webp");
snowFreeze2Img = loadImage("snow5.webp");
}

function setup(){
createCanvas(1000,700);
pic1 = createSprite(500,360);
pic1.addImage(snowAnimation);

snowFreeze1G =new Group();
snowFreeze2G =new Group();
}

function draw(){
    background(0);

    createSnowFreeze1();
    createSnowFreeze2();

    if(keyDown("SPACE")){
        pic1.changeImage("snow2.jpg");
    }
    
    drawSprites();
}
function createSnowFreeze1() {
    if (World.frameCount % 200 == 0) {
    var snowFreeze1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
    snowFreeze1.addImage(snowFreeze1Img);
    snowFreeze1.scale=0.12;
    snowFreeze1.velocityY = 3;
    snowFreeze1.lifetime = 250;
    snowFreeze1G.add(snowFreeze1);
    }
  }

  function createSnowFreeze2() {
    if (World.frameCount % 200 == 0) {
    var snowFreeze2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
    snowFreeze2.addImage(snowFreeze2Img);
    snowFreeze2.scale=0.12;
    snowFreeze2.velocityY = 3;
    snowFreeze2.lifetime = 250;
    snowFreeze2G.add(snowFreeze2);
    }
  }