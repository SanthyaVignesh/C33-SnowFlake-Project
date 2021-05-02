class Snow{
    constructor(x,y){
        var option = {
            friction : 0.04,
            //frictionAir : 0.4,
            density : 0.2
        }

        this.snow = Bodies.circle(x,y,30,option);
        World.add(world,this.snow);

        this.image = loadImage("snow4.webp");
        this.radius = 40;
        this.velocity = this.snow.velocity;
    }

    display(){
        var pos = this.snow.position
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }

    update(){
        if(this.snow.position.y > windowHeight){
            Matter.Body.setPosition(this.snow,{x : random(20,windowWidth-20),y: random(0,windowHeight-20)});
           //Matter.Body.setVelocity(this.snow,this.velocity);
        }
    }
}