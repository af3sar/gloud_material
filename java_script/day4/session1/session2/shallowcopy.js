let original = {
    name: "Afsarudeen",
    dept: "BCA",
    age: 11,
    color: "Blue",
    address: {
        city: "Udangudi"
    }
}

//let copyopject = {...original} //this is normal shallow copy
let copyobject = JSON.parse(JSON.stringify(original)) //<deep copy in shallow copy method syntax

copyobject.name = "AAA"
copyobject.address.city = "TVL"

console.log("Copy Object:", copyobject);
console.log("Original:", original);

