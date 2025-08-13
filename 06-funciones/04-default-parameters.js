// Default Parameters
/*
    I'm goint to use arrow functions
*/

// Function without difault parameter
const greeting = (name) => `Hi, ${name}`;

console.log(greeting('New York'));
// Hi, New York

// Want happens if we don't pass parameters to the function?
// It returns undefined
console.log(greeting());
// Hi, undefined

console.log('\n');


// Function with default parameter
const greet = (name = 'Unknown') => `Hi, ${name}`;

console.log(greet('John Doe'));
// Hi, John Doe

// Then when don't send parameters it returns the dafault parameter
console.log(greet());
// Hi, Unknown

// Function to say your age
const printYourAge = (name = 'Unknown', age) => {
    const currentAge = new Date().getFullYear().toString();
    const cA = parseInt(currentAge);
    console.log(cA);
    
    return `Hi ${name}, you are ${age} years old`;
};

console.log(printYourAge())



// NaN is short for Not a Number