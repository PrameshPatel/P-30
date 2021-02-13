class Ball{
    constructor(x,y,width,height){
         
        this.body = Bodies.rectangle(x,y,width,height,{friction:1,frictionAir:0.005,density:1})
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(3);
        stroke("white");
        fill("yellow");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}