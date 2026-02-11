// object keys

let obj1 = {
    name: "Afsarudeen",
    dept: "BCA"
};
let obj2 = {
    age: 20,
    color: "blue"
}

const key = Object.keys(obj1);
const values = Object.values(obj1);
const entries = Object.entries(obj1);

//const assign = Object.assign({},obj1,obj2)
const assign = Object.assign(obj1, obj2)
//restoperator
const restoperator ={ ...obj1, ...obj2, "city":""}

console.log("Keys:", key);
console.log("Values:", values);
console.log("Entries:", entries);
console.log("Assign:", assign);
console.log("Rest operator:", restoperator);




