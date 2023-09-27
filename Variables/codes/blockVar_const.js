for (let i = 0; i < 5; i++) {
    // i is block-scoped to the for loop
        console.log(i); // Accessible within the loop
    }

    console.log(i); // Error: i is not defined