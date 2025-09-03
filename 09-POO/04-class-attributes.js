// CLASS ATTRIBUTES
// If i want people to have email and olso have an age,
// we can define the class attributes

// Class
class People {

    #name; // Private attribute

    // Constructor - Builder
    constructor(name, lastMame, age) {
        // we use reserved word THIS
        // Attributes
        this.#name = name;
        this.lastMame = lastMame;
        // Now, when we create an instance of the class People
        // we can pass the name and lastMame as arguments
        // and they will be assigned to the instance
        this.age = age;
        // If we create another instance of the class People
        // we can pass different values for name and lastMame
        // and they will be assigned to that instance
    }
    // Atributos
    // Metodos
}

class Pet {
    #name; // Private attribute
    #type; // Private attribute
    constructor (name, type) {
        this.#name = name;
        this.#type = type;
        // Now, when we create an instance of the class Pet
        // we can pass the name and type as arguments
        // and they will be assigned to the instance
        // If we create another instance of the class Pet 
    }
}

const johnDoe = new People('John Doe');
console.log(johnDoe);
// People { name: 'John Doe' }

const marieDoe = new People('Marie Doe');
console.log(marieDoe);
// People { name: 'Marie Doe' }

const max = new Pet();
console.log(max);
// Pet {}

console.log(johnDoe.name); // undefined
console.log(marieDoe.name); // undefined
console.log(max.name); // undefined

// TODO: Create a method to get the private attribute name
// and also a method to set the private attribute name 
