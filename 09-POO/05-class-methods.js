// Class Methods
// Are functions that are associated with a class and can be called on instances of that class.
// Olso could be describe as a functioality that is associated with a class and can be called on instances of that class.

class People {

    #name; // Private attribute

    // Constructor - Builder
    constructor(name, lastMame) {
        // we use reserved word THIS
        // Attributes
        this.#name = name;
        this.lastMame = lastMame;
        // Now, when we create an instance of the class People
        // we can pass the name and lastMame as arguments
        // and they will be assigned to the instance
    }

    // Metodos
    getName() {
        return this.#name;
    }

    setName(newName) {
        if(typeof newName !== 'string') {
            throw new Error('Name must be a string');
        }
        this.#name = newName;
    }
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

const johnDoe = new People('John', 'Doe');
console.log(johnDoe);
// People { name: 'John Doe' }

const marieDoe = new People('Marie', 'Doe');
console.log(marieDoe);
// People { name: 'Marie Doe' }

const max = new Pet();
console.log(max);
// Pet {}

console.log(johnDoe.getName()); // John
console.log(marieDoe.getName()); // Marie
johnDoe.setName('Johnathan');
console.log(johnDoe.getName()); // Johnathan
// johnDoe.setName(123); // Error: Name must be a string
console.log(max.name); // undefined