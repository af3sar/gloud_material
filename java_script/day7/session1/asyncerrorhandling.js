async function asyncFunction() {
    try {
        //Simulate a successful operation
        let response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("operation successful!");
            }, 2000);
        });  //op
        console.log(response);

    } catch (error) {
        console.error(error);  //this will not execute

    }

}
asyncFunction();

//now lets simulate an error 
async function asyncFunctionWithError() {
    try {
        //simulate an error 
        let response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Error occcured");
            }, 2000)
        });
    } catch (error) {
        console.error(error);   //op: Error occcured
    }
}
asyncFunctionWithError();
