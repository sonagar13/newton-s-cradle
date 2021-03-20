class Bob{

    constructor(x,y,r){



        var options = {

            isStatic: false,
            
			restitution:1,
			friction:0,
			density:0.8
        }


        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;

        //this.height = h;
        World.add(world,this.body);

    }


    display(){


        var position = this.body.position;
        //console.log(this.radius);
        push ();

        translate(position.x,position.y);
        rectMode(RADIUS);
        fill ("green");
        ellipse(0,0,this.radius,this.radius);
        pop ();

    }



}