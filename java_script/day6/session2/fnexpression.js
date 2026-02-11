// Function expression (Anonymous, Named )

var greet = function (name) {
    console.log(`hello, ${name}!`);

}
greet("world")


//Named function expression

var greet = function greetFunction(name) {
    console.log(`Hello, ${name}`);
    
}
greet("world");