// REST PARAMETERS

// Rest parameters not are default parameters.
const sumar = (n1, n2) => {
    return n1 + n2;
}

console.log(sumar(34, 37));

const susbtrab = (n1, n2, ...restParameter) => {
    console.log(restParameter);
    console.log(...restParameter);
    restParameter.map(e => console.log(e+1))
    return n1 - n2;
}

console.log(susbtrab(34, 10));
console.log(susbtrab(34, 10, 5, 3, 8));
