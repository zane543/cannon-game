var eagle;
var cannon;
var stickman, stickManRunning;
var cage;
var bg;

var c1,c2,c3,c4,c5,c6,c7,c8;
var e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13;
var st1,st2,st3,st4,st5,st6;

function preload(){

  c1 = loadAnimation("cannon shooting 1.png","cannon shooting 2.png","cannon shooting 3.png","cannon shooting 4.png","cannon shooting 5.png","cannon shooting 6","cannon shooting 7","cannon shooting 8");

  e1 = loadAnimation("eagle flying 1.png","eagle flying 2.png","eagle flying 3.png","eagle flying 4.png","eagle flying 5.png","eagle flying 6.png","eagle flying 7.png","eagle flying 8.png","eagle flying 9.png","eagle flying 10.png","eagle flying 11.png","eagle flying 12.png","eagle flying 13.png");

  st = loadAnimation("stickman running 1.png","stickman running 2.png","stickman running 3.png","stickman running 4.png","stickiman running 5.png","stickman running 6.png");

  bullets = loadImage("bullets.png");

  cage = loadImage("cage.png");

  stickManRuning = loadImage("stickman idle.png");

  bg = loadImage("background.png")
 
}

function setup(){
  createCanvas(displayWidth,displayHeight);

  stickman = crateSprite(700,500);
  StickManRunning.addAnimation("stickManRunning",st);

    
}

function draw(){
  background(bg);

  drawSprites();

}
