// Cadenas de texto o Strings
let nombre = "Alexi Dg";


// Funcionalidades para trabajar con cadenas de texto
// Cuando no tiene parentesis al final se conoce como propiedad
// Pero al tenerlo se conoce como metodo
// Los metodos son marticularidades, un nombre técnico que se le dan a las 
//  funcionalidades que se pueden ejecutar sobre un texto
let nombreCompleto = "Alexi Duran Gomez";
let paisNacimiento = "Colombia";

// Medir la longitud de una cadena de texto: 
// length = logitud: con este metodo podemos saber la longitud 
// en caracteres del texto
console.log(nombreCompleto.length);
console.log(paisNacimiento.length);

// INCLUDES = Incluir
// Utilizando este metodo podemos saber si la cadena de texto incluye
// un caracter o una palabra completa
console.log(nombreCompleto.includes("Gomez"));

// Preguntar si un texto comienza con un caracter
console.log(nombreCompleto.startsWith('p'));
console.log(nombreCompleto.startsWith('a'));
console.log(nombreCompleto.startsWith('A'));

// trim - podar, eliminar los espacios
let mascota = "     yurena     ";
let miMascotaSinEspacios = mascota.trim();
console.log('\n' + mascota.length);
console.log(miMascotaSinEspacios.length);

// repeat - repetir
let nana = "na na ";
console.log('\n' + nana.repeat(5));

// replace - reemplazar, reemplaza la primera ocurrencia
let nombreErrado = "Juan Camilo Pugenio";
console.log('\n' + nombreErrado.replace("Juan", "Jauncho"));

// replace - reemplazar todo, para reemplazar todas las ocurrencia
console.log(nombreErrado.replaceAll("o", "2"));