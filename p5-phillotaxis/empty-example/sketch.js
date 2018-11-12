var n = 0; 
var c = 4;


function setup() {
  // put setup code here
createCanvas(400,400);
angleMode(DEGREES);
colorMode(HSB);
background(0);

}

function draw() {
  // put drawing code here
  var a = n * 137.5;
  var r = c * sqrt (n);

  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;


  fill(a % 256, 255, 255);
  noStroke(); 
  ellipse(x,y, 4, 4);

  n++;


}