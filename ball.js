class Ball{
constructor(x,y,width,height){
var options = {
    'restitution': 1.2,
    'isStatic': true,
    'density': 1.0
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;

World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    rectMode(CENTER);
    rect(pos.x,pos.y,pos.width,pos.height);
    pop();
}
}