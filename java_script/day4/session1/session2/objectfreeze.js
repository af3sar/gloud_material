let original = {
    name: "Afsarudeen",
    dept: "BCA",
    age: 11,
    color: "Blue",
    address: {
        city: "Udangudi"
    }
}

//object freeze     // its totaly freeze
Object.freeze(original)

//object seal       //this modify only the value of keys 
Object.seal(origianl)

original.name = "aaa"
original.newproperty = "new value"

console.log("Original", Original);