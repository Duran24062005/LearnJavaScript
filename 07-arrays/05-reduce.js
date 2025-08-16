// REDUCE ARRAYS METHOD
// A function that accepts up to four arguments. The reduce method calls 
// the callbackfn function one time for each element in the array.
// Calls the specified callback function for all the elements in an array. 
// The return value of the callback function is the accumulated result, and 
// is provided as an argument in the next call to the callback function.

let semesterNotes = [8, 9, 3, 5, 7, 10, 2, 4.5];

// Reduce Method: Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
let totalNotes = semesterNotes.reduce((acum, note) => {
    return acum + note;
});

console.log(totalNotes);

const promediateSemester = totalNotes / semesterNotes.length;

console.log(promediateSemester);

const roundedNotes = Math.round(promediateSemester, 2);
console.log(roundedNotes);



const myPets = ['Cohen', 'Azabache', 'Jacko'];
const myPetstogether = myPets.reduce((acum, pet) => acum + pet, '- ');
console.log(myPetstogether);
const myPetstogether2 = myPets.reduce((acum, pet) => `${acum} ${pet}`, "- My pets are called ");
console.log(myPetstogether2);


