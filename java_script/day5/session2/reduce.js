const numbers = [10, 20, 30, 40];

const addition = numbers.reduce((acc, curr) => acc + curr, 0);

const subtraction = numbers.reduce((acc, curr) => acc - curr);

const multiplication = numbers.reduce((acc, curr) => acc * curr, 1);

const division = numbers.reduce((acc, curr) => acc / curr);

console.log("Addition:", addition);
console.log("Substraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);





