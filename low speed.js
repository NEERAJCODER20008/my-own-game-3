class LowSpeed{
    constructor() {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(random(20,780),0,35,options);
      this.image=loadImage("images/low speed icon.png")
      this.r = 70; 
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
      fill("white");
    image(this.image,pos.x, pos.y, this.r,this.r);
    }
  };