class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("PAPER.png");
        this.image.scale = 0.5;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 15, 70, 70);
        //ellipse(,pos.x, pos.y, 20, 20);
		
    }
}
/*

push();
		translate(pos.x, pos.y);
        pop();
        class Paper extends BaseClass{
    constructor(x,y,radius){
     super(x, y, radius);
     this.image = loadImage("sprites/Paper.png");
    }
    display(){
        super.display();
    }
}*/