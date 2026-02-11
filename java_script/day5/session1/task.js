// array with the add and del

let foods = ["Biriyani", "Porota", "Friedrice", "Veg Meals"];
console.log("Normal Shop food sales items: ", foods);

var offer = foods.push("Gryll", "Shawarma");
var offer = foods.unshift("Mandhi");

console.log("Dec 25 special offer today total menu: ", foods);
console.log("How many special foods for christmas: ", offer);

// offer ends so remove added foods
foods.pop();
foods.pop();
offerends = foods.shift();

console.log("Offer Ends! so the menu back to normal: ", foods);



