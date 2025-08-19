// Literal Object

const people = [
    "John Doe",
    32,
    "john@doe.com",
    ["Colombia", "Bogota"]
];

const people1 = [
    "Marie Smithers",
    27,
    ["Ciudad de Mexico", "Mexico"],
    "marie@doe.com",
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i], people1[i]);
}

const people2 = {
    "nombre": "Alexi Duran",
    "edad":20,
    "email": "alexi@duran.com",
    "ciudad": "Bucaramanga",
    "pais": "Colombia"
};

/* Object Desestructure */
const { nombre } = people2;

console.log("Tu nombre es: " + nombre);

// Array desestructure
const [ name, edad, ciudad, pais  ] = people1

console.log(`Hola ${name} tu edad es ${edad} y vives en ${ciudad}`);

