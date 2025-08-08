// Operadores Lógicos
/* 
    clima => soleado
    dia => viernes o si es sabado
    horario => antes de las 6
 */

let clima = "soleado";
let dia = "viernes";
let horario = 2;

// AND - &&
console.log(clima === "soleado" && dia === "viernes" && horario < 6);

// OR - ||
console.log(dia === "viernes" || dia === "sabado");

// NOT - !
let operator = true;
console.log(!operator);