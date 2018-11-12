var bird;
var pipes = [];

function setup() {
  // put setup code here
  createCanvas(400,600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  // put drawing code here
  background(0);


 for(var i= pipes.length-1; i>=0; i--) {

    pipes[i].show();
    pipes[i].update();
      if (pipes[i].offscreen()){
        pipes.splice(i,1);
      }

      if(pipes[i].hits(bird)){
        console.log("HIT");

      }

  }



  bird.update();
  bird.show();

  if ( frameCount % 100 == 0 ) {
pipes.push(new Pipe());

  }



 

}

function keyPressed () {
if (key == ' ') {
	bird.up();
	//console.log("SPACE");
	}

}

