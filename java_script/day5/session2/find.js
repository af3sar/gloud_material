let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 8, 8, 2, 4, 9];

let evenNumbers = numbers.find(num => num === 2);

let oddNumbers = numbers.find(num => num === 3);

let nullNumbers = numbers.find(num => num === 10);

console.log(evenNumbers);
console.log(oddNumbers);
console.log(nullNumbers);


