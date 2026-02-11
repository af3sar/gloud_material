const cars = {
    name: "totyota",
    model: "innova",
    color: "blue"
}

console.log("car name:", cars.name);
console.log("car model:", cars.model);
console.log("car color:", cars.color);

console.log("car name:", cars["name"]);
console.log("car model:", cars["model"]);
console.log("car color:", cars["color"]);

cars.name = "Audi"
console.log("car name: ", cars.name);

cars["name"] = "BMW"
console.log("car name:", cars["name"]);

cars.city = "Tirunelveli"
console.log("car details: ", cars);

