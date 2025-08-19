// Object Methods

const marieSmithers = {
    nombre: "Marie",
    apellido: "Smithers",
    edad: 27,
    email: "marie@smithers.com",
    "ubicacion": {
        ciudad: "ciudad de Mexico",
        pais: "Mexico"
    },
    nombreEdad: `${this.nombre} - ${this.edad}`,
    "ciudad_nacimeinto": "mexico city",
    saludar: function () {
        return "Hola mundo";
    },
    saludarNombreArg: function (nombre) {
        return `Hola ${nombre}`;
    },
    saludarNombreArgLess: function () {
        return `Hola ${marieSmithers.nombre}`;
    },
    saludarNombre: function () {
        return `Hola ${this.nombre}`;
    }
};


const greeting = (name) => `Hi ${name}`;

function CallBack(name, callBack) {
    return callBack(name);
}

console.log(CallBack(marieSmithers.nombre, greeting));
console.log("\n");

console.log(marieSmithers.saludar());
console.log("\n");

console.log(marieSmithers.saludarNombre());
console.log("\n");

console.log(marieSmithers.saludarNombreArg(marieSmithers.nombre));
console.log("\n");

console.log(marieSmithers.saludarNombreArgLess());
console.log("\n");


console.log(marieSmithers.nombreEdad);
console.log("\n");

