// delete concept in object

const user = {
    name: "Afsarudeen",
    age: 20,
    city: "Udangudi",
    degree: "BCA"
}

console.log("Before Deleting city", user);

delete user.city; //deleting the city property.
delete user["age"]; //deleting the age property.

console.log("After deleting city:", user);
