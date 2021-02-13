class Rope{
    constructor(firstBody,fixedPoint){
     this.rope = Constraint.create({bodyA:firstBody,pointB:fixedPoint,stiffness:1,lenght:50})
     this.fixedPoint = fixedPoint;
     World.add(world,this.rope)
    }

    fly(){
        this.rope.bodyA=null
      }

    attach(body){
        this.rope.bodyA=body
    }

    display(){
        if(this.rope.bodyA){
        var A=this.rope.bodyA.position;
        var B=this.fixedPoint;
        push();
        strokeWeight(3)
        stroke("pink");
        line(A.x,A.y,B.x,B.y);
        pop();
        }
    }
}