//image Variables
var img1;
var ready = false;
var playing;

function setup(){
  createCanvas(1000, 800);

  img1 = loadImage("Assets/davidbowie.gif");
  sound = loadSound("Assets/untitled.wav");

}

function draw(){
  if(ready){
      image(img1, 720, 480);
      playing = true;

  imageMode(CENTER);
  }
}

function mousePressed(){
  ready = true;
  sound.play();
}
