// What are functions?
/* 
    Las funciones buscan que podamos escribir codigo y reutilizarlo, entre otras cosas.
    Functions allow us to write code and reuse it, among other things.
*/

// Function with ruturn without parameters
function saludar() {
    // Here we are going to write the body of the function.
    // In the body we can store whatever we want.
    return "Hellow broo..."
}

let messageSaludo = saludar();
console.log(saludar());
console.log(messageSaludo);

// Function with ruturn and parameters
function dinamycGreeting(name = "Persona desconocida") {
    return `Hellow ${name}`;
}

function dinamycGreeting(name) {
    let message;
    if (name === undefined) {
        message = "Persona desconocida";
    } else {
        message = `Hellow ${name}`;
    }
    return message;
}

let meSaludo = dinamycGreeting("Camilo");
console.log(dinamycGreeting("José"));
console.log(dinamycGreeting());
console.log(meSaludo);