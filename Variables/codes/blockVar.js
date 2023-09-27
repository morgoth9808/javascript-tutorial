function exampleFunction() {
    // Variable with local scope
    var localVar = "I'm local";
    console.log(localVar); // Accessible within the function
}

exampleFunction();
console.log(localVar); // Error: localVar is not defined