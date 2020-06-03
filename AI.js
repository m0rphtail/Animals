class animal {
    constructor (){
    this.health = 100;
    this.hunger = 0;
    this.thirst = 0;
    this.dopamine = 50;
    }

    move(distance) {
            if(distance!=0)
            {
                for(let i=0;i<distance;i++)
                {
                    this.hunger=this.hunger+5;
                    this.thirst=this.thirst+1;
                }
            }
            else return 1;
            console.log("Animal moved " + distance + " unit(s)");
        }
}
myAnimal = new animal;

function dispVitals() {
    console.log("Health: " + myAnimal.health);
    console.log("Hunger: " +myAnimal.hunger);
    console.log("Thirst: " +myAnimal.thirst);
    //console.log("Dopamine: " +myAnimal.dopamine);
}

myAnimal.move(1);
dispVitals();