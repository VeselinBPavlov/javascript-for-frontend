function solve(input) {
    let counter = 0;
    for (let num of input) {
        if (num < 0) {
            counter++;
        }
    }

    if (counter % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

// Test.
solve([1, 3, -4 , -5]);
solve([1, 3, -4 , 5]);
