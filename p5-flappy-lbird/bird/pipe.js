
function Pipe() {

	this.top= random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.w = 20;
	this.speed = 2;

	this.hits = function(bird){
		if(bird.y < this.top || bird.y > height - this.bottom)// Si l'oiseau est dans le cadre
		{
			if(bird.x > this.x && bird.x < this.x + this.w) // Si l'oiseau touche les pipes
			
			this.highlight = true ;
				return true;

		}
		this.highlight = false ;

		return false;
	}


	this.show = function() {

		fill(255);
		if(this.highlight){
			fill(255,0,0);
		}
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height-this.bottom, this.w, this.bottom);
	}



	this.update = function() {
		this.x -= this.speed ;

	}

	this.offscreen = function() {
	if(this.x < this.w){
		return true;
	} else {
		return false;
	}

	}




}