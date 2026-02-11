function addTwoNumbers(number1, number2) {
    try {
        let addTwoNumbers = number1 + number2
        if (addTwoNumbers > 2) {
            throw new Error("Number cannot be greater than 2")

        }
        else {
            return addTwoNumbers
        }
    }
    catch (error) {
        console.log("Error you got :", error);
    }
}
const output = addTwoNumbers(1, 2)
console.log("Output for the function :", output);
