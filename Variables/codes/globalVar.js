// Variable with global scope
var globalVar = "I'm global";

function exampleFunction() {
    console.log(globalVar); // Accessible within the function
}

exampleFunction();
console.log(globalVar); // Accessible outside the function