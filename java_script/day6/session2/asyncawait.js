/*
syntax: 
// Define an async function
async function functionName(){
    let result = await someAsyncFunction();
    //Use the result here
}
*/

//Simulative a server fetch with a delay
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data  fetched succesfully!")
        }, 2000); //2- second delay
    });
}

//using async and await
async function getData() {
    console.log("Fetching data...");

    let result = await fetchData();

    console.log(result);  //Logs 
}

//call the async function
getData();