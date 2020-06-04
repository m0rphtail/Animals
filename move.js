let A = require('./animal');

let MyAnimal = new A;

exports.move =function (distance) {
    if(distance!=0)
            {
                for(let i=0;i<distance;i++)
                {
                    MyAnimal.hunger=MyAnimal.hunger+5;
                    MyAnimal.thirst=MyAnimal.thirst+1;
                }
            }
            else return 1;
            console.log("Animal moved " + distance + " unit(s)");
            exports.hunger = MyAnimal.hunger;
            exports.thirst = MyAnimal.thirst;
}