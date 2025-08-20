// Introduction to OOP: Object Oriented Programming

/*Introduction to Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects." 
These objects represent real-world entities and are designed to encapsulate both **data** 
(attributes or properties) and **behavior** (methods or functions). Instead of focusing 
only on functions and procedures, OOP emphasizes the organization of code around 
reusable and modular components.

The main idea behind OOP is to model software in a way that mirrors how we perceive 
the real world. For example, a "Car" object might have properties such as `color` 
and `speed`, and behaviors like `drive()` or `brake()`. This approach makes 
programs easier to understand, extend, and maintain.

OOP relies on four fundamental principles:

1. **Encapsulation** – Bundling data and methods that operate on that data within a single unit (object), while controlling access to the internal state.
2. **Abstraction** – Hiding complex implementation details and exposing only the necessary functionality to the user.
3. **Inheritance** – Allowing new classes (subclasses) to derive from existing ones (superclasses), reusing code and promoting hierarchy.
4. **Polymorphism** – The ability for different objects to respond to the same method call in different ways, increasing flexibility and scalability.

By applying these principles, OOP promotes **modularity, reusability, and maintainability**, which are essential in modern software development.

---
*/



/* Object-Oriented Programming (OOP) in JavaScript

JavaScript is a **multi-paradigm language**, which means it supports different programming styles, including **Object-Oriented Programming (OOP)**. Unlike traditional OOP languages like Java or C++, JavaScript is **prototype-based**, but since ES6 it introduced the `class` syntax, which makes writing OOP code more familiar.

In JavaScript, you can create objects and model real-world entities with **properties** (data) and **methods** (functions inside objects).

---

#### 🔹 Example 1: Object literal*/
const car = {
  brand: "Toyota",
  speed: 0,
  drive() {
    this.speed += 10;
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
};

car.drive();

/* 🔹 Example 2: Classes (modern OOP in JS)*/

class Car {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }

  drive() {
    this.speed += 10;
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

const myCar = new Car("Honda");
myCar.drive();

// 🔹 Example 3: Inheritance


class Vehicle {
  constructor(type) {
    this.type = type;
  }

  start() {
    console.log(`${this.type} started`);
  }
}

class Motorcycle extends Vehicle {
  constructor(brand) {
    super("Motorcycle");
    this.brand = brand;
  }

  wheelie() {
    console.log(`${this.brand} is doing a wheelie!`);
  }
}

const moto = new Motorcycle("Yamaha");
moto.start();
moto.wheelie();

/*

✅ Why use OOP in JS?

* Helps **organize code** in large projects.
* Promotes **reusability** with classes and inheritance.
* Makes it easier to **model real-world problems**.
* Works well with **frameworks and libraries** (React, Angular, Node.js often use OOP patterns).

*/