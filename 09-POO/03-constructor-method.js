// Constructor Method

// Class
class People {
    // Constructor - Builder
    constructor(text) {
        console.log('The class constructor method was executed');
        // The class constructor method was executed
        console.log(text);
        // A text of prueb
        
    }
    // Atributos
    // Metodos
}

class Pet {
    constructor () {
        console.log('Contructor method of pet');
        // Contructor method of pet
        
    }
}

// Instance = Creation of an object from a class (template)
const johnDoe = new People('A text of prueb'); // This is an Object
console.log(johnDoe);

const puchi = new Pet();
console.log(puchi);
