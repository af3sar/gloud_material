// Nested Objects 

const user = {
    name: "Afsarudeen",
    age: 20,
    address: {
        city: "Udangudi",
        state: "Tamilnadu",
        country: "India"
    }
};

console.log("User Details:", user);
console.log("User's City:", user.address.city);
