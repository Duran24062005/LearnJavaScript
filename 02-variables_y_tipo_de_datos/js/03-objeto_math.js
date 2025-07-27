// Objeto Math
let objetoMath = Math;

// Generar un numero aleatorio entre 0 y 1
let numeroAleatorio = objetoMath.random();
console.log(numeroAleatorio);

// Redondear un número con el objeto Math
let precioTicket = 3.67;
console.log("Numero original: " + precioTicket);

// Redondeo hacia arriba
let precioTicketUp = Math.ceil(precioTicket);
console.log("Redondeo hacia arriba: " + precioTicketUp);

// Redondeo hacia arriba o hacia abajo segun lo cerca que esté el decimal
let precioTicket2 = 6.1;
let precioTicketUpOrDown = Math.round(precioTicket2);
console.log("Redondeo hacia arriba: " + precioTicketUpOrDown);

// Redondeado hacia abajo
let precioTicketDown = Math.floor(precioTicket);
console.log("Redondeado hacia abajo: " + precioTicketDown);

// Lista de numero en diferentes variables
let maxNumber = 5;
let maxNumber2 = 10;
let maxNumber3 = 500;
let maxNumber4 = 34;

// Encontrar el numero más alto en una lista
console.log(Math.max(maxNumber, maxNumber2, maxNumber3, maxNumber4));
console.log(objetoMath.max(maxNumber, maxNumber2, maxNumber4, maxNumber3));

// El número más bajo en una lista
console.log(Math.min(maxNumber, maxNumber2, maxNumber3, maxNumber4));
console.log(objetoMath.min(maxNumber, maxNumber2, maxNumber4, maxNumber3));

// Elevar numeros
console.log(Math.pow(3, 2)); 