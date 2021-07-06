var spc1, spc2,spc3,spc4,bgImg,issImg;
var iss, sc;
var hasDocked = false;

function preload() {
  spc1 = loadImage("Images/spacecraft1.png")
  spc2 = loadImage("Images/spacecraft2.png")
  spc3 = loadImage("Images/spacecraft3.png")
  spc4 = loadImage("Images/spacecraft4.png")

  issImg = loadImage("Images/iss.png")
  bgImg = loadImage("Images/spacebg.jpg")


}

function setup() {

  createCanvas(800,400);
  iss = createSprite(400, 200);
  iss.addImage(issImg);
  iss.scale = 0.35
  sc = createSprite (585,320);
  sc.addImage(spc1)
  sc.scale = 0.2
}

function draw() {
  background(bgImg);  
  if (!hasDocked){
    if (keyDown ("LEFT_ARROW")){
      sc.x-=2
      sc.addImage(spc3)
      }
    if (keyDown ("RIGHT_ARROW")){
        sc.x+=2
        sc.addImage(spc4)
        }
    if (keyDown ("UP_ARROW")){
          sc.y-=2
          sc.addImage(spc2)
          sc.scale-=0.0005;
          }
    if (keyDown ("DOWN_ARROW")){
            sc.addImage(spc1)
            }
    
  }
  if (sc.y<=(iss.y+70) && (sc.x<=(iss.x-10))){
    sc.addImage(spc1);
    hasDocked = true;
    textSize(25);
    fill ("white");
    text("You Have Docked Succesfully!",350,300);
  }
  drawSprites();
}