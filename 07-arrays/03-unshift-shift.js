// SHIFT & UNSHIFT

// These methods are used to add a new element to the beginning of an array 

let superHeroes = ['Super Man', 'Wonder Woman', 'Acuaman', 'Iron Man', 'Hulk'];
console.log(superHeroes);

console.log('\n');

// Unshif Method: This method add a element to the beggin
// Inserts new elements at the start of an array, and returns the new length of the array.
superHeroes.unshift('Wolverine', 'Teacher X', 'Spider Man', 'Black Widow');
console.log(superHeroes);

console.log('\n');

// Shif Method: This method delete the first element to the array.
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
superHeroes.shift();
console.log(superHeroes); // The console.log() static method outputs a message to the console.

console.log('\n');

let firstElement = superHeroes.shift();
console.log(firstElement);
console.log(superHeroes);


