class Ball{
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(400,730,35,options);
      this.image=loadImage("images/ball.png")
      this.r = 70; 
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX
      imageMode(CENTER);
      fill("white");
    image(this.image,pos.x, pos.y, this.r,this.r);
    }
  };