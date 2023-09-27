function exampleFunction() {
    if (true) {
    // Function-scoped variable
        var functionVar = "I'm function-scoped";
        console.log(functionVar); // Accessible within the function
    }

    console.log(functionVar); // Accessible within the function
}

exampleFunction();
console.log(functionVar); // Error: functionVar is not defined outside the function