// Key Values+

const marieSmithers = {
    nombre: "Marie",
    apellido: "Smithers",
    edad: 27,
    email: "marie@smithers.com",
    "ubicacion": {
        ciudad: "ciudad de Mexico",
        pais: "Mexico"
    },
    "ciudad_nacimeinto": "mexico city",
    "ciudad nacimeinto": "Ciudad de mexico",
    34: 50
};

console.log(typeof marieSmithers);
console.log(marieSmithers);

console.log(typeof marieSmithers.ciudad_nacimeinto);
console.log(marieSmithers.ciudad_nacimeinto);

console.log(typeof marieSmithers["ciudad nacimeinto"]);
console.log(marieSmithers["ciudad nacimeinto"]);

console.log(typeof marieSmithers[34]);
console.log(marieSmithers[34]);

const johnDoe = {
    name: "John Doe",
    age: 40,
    email: "john@doe.com",
    "ubication": {
        ciudad: "Bogota",
        pais: "Colombia"
    },
    "pets": [ "lazzy", "Priet" ],
    isMarried: null
};