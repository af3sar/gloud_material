let original = {
    name: "Afsarudeen",
    dept: "BCA",
    age: 11,
    color: "Blue",
    address: {
        city: "Udangudi"
    }
}

let newobject = Object.create(original)
newobject.team = 122

console.log("New object", newobject, newobject.name);
console.log("Checking property", newobject.hasOwnProperty("name"));
