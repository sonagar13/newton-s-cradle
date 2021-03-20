class Roof{

    constructor(x,y,w,h){



        var options = {

            isStatic: true
        }


        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;

        this.height = h;
        World.add(world,this.body);

    }


    display(){


        var position = this.body.position;
        push ();

        translate(position.x,position.y);
        rectMode(CENTER);
        fill ("grey");
        rect(0,0,this.width,this.height);
        pop ();

    }


















}