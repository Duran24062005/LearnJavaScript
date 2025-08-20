// Spread Operator And Destructure
const phone = {
    marca: "Samsung",
    modelo: "A21s",
    precio: 400
};

const phone2 = phone;

phone2.precio = 1000;

console.log(phone2);
console.log(phone);

// Spread Operator
// Clone of the object, without modify the original object
const phoneThree = {...phone};
phoneThree.precio = 10000000;
phoneThree.colores = ['negro', 'azul'];

console.log(phoneThree);

// Destructuring
const phoneFour = {...phone};
phoneFour.precio = 10;
phoneFour.colores = ['naranjo', 'azulado'];

let precio = phoneFour.precio;
// Destructuring
let { modelo } = phoneFour;
console.log(phoneFour);