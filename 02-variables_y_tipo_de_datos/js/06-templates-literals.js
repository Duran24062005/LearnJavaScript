// Templates Literals o Templates strings
let nombre = "Alexi";
let apellido = "Duran";
let edad = 20;

let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

let nombreCompleto2 = nombre + " " + apellido;
console.log(nombreCompleto2);

let saludo = "Hola, mi nombre es " + nombreCompleto2 + " y tengo " + edad + " años";
console.log(saludo);

// template string
let templateString = `Hola, mi nombre es ${nombreCompleto2} y tengo ${edad} años`;
console.log(templateString);

let literalString = `Hola, mi nombre es nombreCompleto2 y tengo edad años`;
console.log(literalString);