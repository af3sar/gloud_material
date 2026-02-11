function validateAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }
    return age;
}
try {
    validateAge(-1);
} catch (error) {
    console.log("Caught an error: " + error.message);
}