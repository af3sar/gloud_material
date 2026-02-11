//rest operator in function

function createUser(name, age, ...hobbies) {
    return {
        name: name,
        age: age,
        hobbies: hobbies
    };
}
let user = createUser("Nalladurai", 24, "Reading", "Treaveling", "Gaming");
console.log(user);

//rest operator in insided variable array

const [first, ...rest] = [10, 20, 30, 40, 50];

console.log(first);
console.log(rest);