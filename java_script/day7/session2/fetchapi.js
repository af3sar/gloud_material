fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to fetch data");
        }
    })
    .then((data) => console.log(data))
    .catch((error) => {
        console.error("Error Occured:", error);
        //Handle the error
    });
