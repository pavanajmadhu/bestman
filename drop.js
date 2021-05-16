class Drop{
    constructor(x,y){
        var options={
          friction:0.2,  
        }
this.rain=Bodies.circle(x,y,10,options)
World.add(world, this.rain);

    }
    display(){
        ellipseMode(CENTER);
        var pos=this.rain.position;
        fill("white")
          ellipse(pos.x,pos.y,10)
    }
}