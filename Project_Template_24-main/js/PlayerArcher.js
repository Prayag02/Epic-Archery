class PlayerArcher {
    constructor(x,y,w,h){
        var options={
            isStatic : true
        };

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;

        Matter.Body.setAngle(this.body,-PI/2);

        this.image = loadImage("./assets/playerArcher.png");
        World.add(world,this.body);
    }
    display() {   
        var pos = this.body.position;

        push(); 
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,this.w,this.h);
        pop();
    }
}
    
    
