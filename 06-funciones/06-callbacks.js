// CALLBACKS FUNCTIONS

/*
    Basically callbacks are functions that pass how parameters to another function.
*/

const greeting = (name) => `Hi, ${name}`;

// Basucally, this function will recive two parameters
function withCallBack(name, callback) {
    return callback(name);
}

const CallBackFunct = (callback) => callback('Joseph');

const result = withCallBack('John Doe', greeting);
const res = CallBackFunct(greeting);
console.log(result);
// Hi, John Doe
console.log(res);
// Hi, Joseph


const mathematicOperation = (operation, num1, num2) => operation(num1, num2);
const sumar = (n1, n2) => n1 + n2;

console.log(mathematicOperation(sumar, 10, 20));
// 30
