class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            
        }
        this.body = Bodies.circle(x,y,radius,options);
      this.x = x;
      this.y = y;
      this.radius=radius;
      this.image=loadImage("Plucking mangoes/mango.png")
      World.add(world, this.body);
    }
}