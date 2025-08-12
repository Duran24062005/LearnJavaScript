// Expressed Functions
/* 
    FN = fn = Functions
    Las funciones expresadas
*/

console.log(greet());

// Declared function
function greet() {
    return 'Hi';
}

// Expressed Function
const farewell = function () {
    return 'Goodbye!';
}

console.log(greet());
console.log(farewell());


// Expressed Function
const farewell3 = function (lenguage) {
    let message;
    switch (lenguage) {
        case "es":
            message = "Adios";
            break;

        case "en":
            message = 'Goodbye!';
            break;

        case "fr":
            message = 'Au revoir!';
            break;

        case "it":
            message = 'Addio!';
            break;
    
        default:
            message = "Please choose the lenguage."
            break;
    }
    return message;
}

console.log("\n" + farewell3('es'));
console.log(farewell3('en'));
console.log(farewell3('fr'));
console.log(farewell3('it'));
console.log(farewell3() + "\n");