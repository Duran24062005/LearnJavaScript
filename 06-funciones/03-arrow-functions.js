// Arrow Functions - Funciones de flecha
/*
    Arrow functions are expressed functions, 
*/

// First example
const sumar = (n1, n2) => {
    return n1 + n2
};

console.log(sumar(5, 5));

// Arrow function with explicit return
const multiplicar = n1 => {
    return n1 * 2;
};

console.log(multiplicar(10));


// Arrow function with inplicit return
const dividir = (num) => num / 2;
const dividirEntre2 = num => num / 2;

console.log(dividir(10));
console.log(dividirEntre2(50));