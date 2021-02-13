class Box{
    constructor(x,y,width,height){
         
        this.body = Bodies.rectangle(x,y,width,height,{restitution:0.3,friction:1,density:0.1})
        this.width=width;
        this.height=height;
        this.Visiblity=255;
        World.add(world,this.body)
    }
    display(){
        if(this.body.speed < 5){
            this.Visiblity = this.Visiblity - 2;
           }
           else{
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        
        tint(255,this.Visiblity);
        strokeWeight(1);
        stroke("white");
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();
           }
    }
}