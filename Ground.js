class Ground {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(800, 620, 1600, 20, options)
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, 1600, 20);
    }
}