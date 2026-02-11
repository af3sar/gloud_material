let obj1 = {
    name: "Afsar",
    age: 20
}

let obj2 = {
    course: "FSD",
    degree: "BCA"
}

obj2.city = "Udangudi"

const obj3 = Object.assign({}, obj1, obj2)

console.log("Total Object:", obj3);

let key = Object.keys(obj3)
console.log("total object Keys only:", key);

let values = Object.values(obj3)
console.log("total object values only:", values);

