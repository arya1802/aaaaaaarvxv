
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var pen;

var r,g,b;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  background(r,g,b);
  pen.position.X=mouseX;
  // change the value of Red based on the mouse movement about the X axis
  if(pen.position.X>200){
    r=r+20;
  }
  // change the value of Green based on the mouse movement about the X axis
  if(pen.position.X<1000){
g=g+30;

  }

  // change the value of Blue based on the mouse movement about the X axis
if(pen.position.X<500,pen.position.X>500){
b=b+30;

  }
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}