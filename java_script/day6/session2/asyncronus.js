
{
    // asyncronus topic
    //promise
    let promise = new Promise((resolve, reject) => {
        //Asynchronous operation
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Success!");
            } else {
                reject("Error!");
            }
        }, 2000);
    });
}

{
    //Handling the promise
    promise
        .then((message) => {  //log the success message
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        })

        //finally block using
        .finally(() => {
            console.log("Promise settled!");

        });
}
