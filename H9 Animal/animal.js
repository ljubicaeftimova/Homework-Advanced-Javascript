// ## Create a class Animal that has:
// * name
// * type - carnivore/herbivore/omnivore
// * age
// * size
// * eat - a method that checks if the input is an Animal.
// 	* If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// 	* If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name). 
// 	* If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large. 
// 	* If the input is not an animal just write: The animal (this animal name) is eating (the input).
// * isEaten = default false



class Animal 
{ 
    constructor(name, type, age, size) 
    {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
       
    }

    eat(input) 
    {
        this.isEaten = false;
        if (input instanceof Animal){
            if (this.type === "herbivore"){
                console.log(`the ${this.name} is a herbivore and doesn't eat other animals.`)
            }
        

            if (this.type !== "herbivore"){
                if (this.size / input.size >= 2){
                    input.isEaten = true;
                    console.log(`the animal ${this.name} ate the ${input.name}`) 
                }
                else {
                    console.log(`the animal ${this.name} tried to eat the ${input.name} but it was too large`)
                }


                
            }
           
        }
        else {
            console.log(`The ${this.name} is eating the  ${input}.`); 
        }
    }
}

let elephant = new Animal("Elephant", "herbivore", 3, 18);
let zebra = new Animal("Zebra", "herbivore", 8, 12);
let rabbit = new Animal("Rabbit", "herbivore", 12, 4);
let lion = new Animal("Lion", "carnivore", 7, 7);
let student = "student";
lion.eat(zebra);
zebra.eat(rabbit);
elephant.eat(student);