var globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    if (true) {
        let blockVar = "Iam block scoped";
        console.log(blockVar);
    }

    console.log(localVar);
    console.log()
}

testScope();
console.log(globalVar);