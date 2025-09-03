// Herencia - Inheritance
// Is a mechanism that allows to create a new class
// based on an existing class
// The new class inherits the attributes and methods
// of the existing class

// Base class - Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Derived class - Subclass
class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the base class
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const animal = new Animal('Generic Animal');
animal.speak(); // Generic Animal makes a noise.

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex barks.
console.log(dog.breed); // German Shepherd

// The Dog class inherits the name attribute and speak method from the Animal class
// but it also has its own breed attribute and overrides the speak method