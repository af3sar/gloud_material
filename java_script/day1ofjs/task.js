let user1 = "Afsar";
let user2 = "Niyas";
let marks1 = 365;
let marks2 = 401;
const percentage1 = marks1 / 6;
const percentage2 = marks2 / 6;

console.log("Student Name:", user1);
console.log(user1, "Mark list", marks1);
console.log("Total percentage of", user1, "is", percentage1);

console.log("\nStudent Name:", user2);
console.log("user2", "Mark list", marks2);
console.log("Total percentage2 of", user2, "is", percentage2);

if (percentage1 > percentage2) {
    console.log("\n", user1, "has scored higher marks than ", user2, "his percentage is ", percentage1);
}
else {
    console.log("\n", user2, "has scored higher marks than ", user1, "his percentage is ", percentage2);
}