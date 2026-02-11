let numbers = [1, 2, 3, 4, 5];

//1. Double each number 
let doubled = numbers.map(num => num * 2);
console.log("Doubled: ", doubled);

//2.Add index to each number
let withIndex = numbers.map((num, index) => `${index}: ${num}`);
console.log("With index: ", withIndex);

//3.Format user objects
let users = [
    { name: "Afsarudeen", age: 20 },
    { name: "Alan", age: 24 },
    { name: "Nalan", age: 26 }

];

let userDescription = users.map(user => `${user.name} is ${user.age} years old`);
console.log("User Description:", userDescription);

