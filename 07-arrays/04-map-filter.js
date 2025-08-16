// MAP and FILTER Methods of the ARRAYS

let notes = [2.5, 4, 6.3, 8, 3,4];
console.log(notes);

let superHeroes = ['Super Man', 'Wonder Woman', 'Acuaman', 'Iron Man', 'Hulk'];
console.log(superHeroes);


// Map Method: Calls a defined callback function on each element of an array, and returns an array that contains the results.
// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
superHeroes.map( e => console.log(e + 'Is my favorite Hero'));
notes.map(e => console.log(e * 2));
let myNewNotes = notes.map(e => e * 2);
console.log(myNewNotes);


// Filter Method: Returns the elements of an array that meet the condition specified in a callback function.
// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
superHeroes.filter(e => console.log(e.startsWith('A')));