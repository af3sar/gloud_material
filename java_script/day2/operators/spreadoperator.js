//Spread operator in array

const originalNumbers = [1, 2, 3];

const extendNumbers = [...originalNumbers, 4, 5];
console.log("Extend Numbers: ", extendNumbers);

const combinedNumbers = [...originalNumbers, ...extendNumbers];
console.log("Combined Numbers:", combinedNumbers);

//Spread operator in object

const user = { name: "Nalladurai", age: 25 };
const updateUserCity = { ...user, city: "Tirunelveli" };
console.log(updateUserCity);

const updateUserAddress = { Area: "Junction", pincode: 627001 };

const combinedUserDetails = { ...updateUserCity, ...updateUserAddress };

console.log(combinedUserDetails);