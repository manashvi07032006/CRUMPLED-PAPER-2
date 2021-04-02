class Sides {
	constructor(x,y){
		var options = {
			isStatic: true
		}
		this.x = x;
		this.y = y;

		this.leftBody = Bodies.rectangle(this.x - 80, this.y+30 ,20,200, options);
		this.rightBody = Bodies.rectangle(this.x + 80,this.y+30 ,20,200, options);
		this.bottomBody = Bodies.rectangle(this.x,this.y,200,20, options);
		this.image= loadImage("dustbingreen.png");
		World.add(world, this.leftBody);
		World.add(world, this.rightBody);
		World.add(world, this.bottomBody);
	}
	display(){
		var posleft = this.leftBody.position;
		var posright = this.rightBody.position;
		var posbottom = this.bottomBody.position;

		push();
		translate(posleft.x, posleft.y);
		rectMode(CENTER);
		fill("brown");
		rect(0, 0, 20,150);
		pop();

		push();
		translate(posright.x, posright.y);
		rectMode(CENTER);
		fill("brown");
		rect(0, 0, 20,150);
		pop();

		push();
		translate(posbottom.x, posbottom.y+10);
		rectMode(CENTER);
		fill("brown");
		imageMode(CENTER);
		image(this.image,0, 0, 200,200);
		pop();
		
	}
}