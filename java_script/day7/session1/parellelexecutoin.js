async function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function 1 completed");
        }, 2000);
    });
}
async function asyncFunction2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function 2 completed");
        }, 5000);
    });
}
async function main() {
    let [result1, result2] = await Promise.all([asyncFunction1(), asyncFunction2()]);
    console.log(result1);
    console.log(result2);
}
main();
