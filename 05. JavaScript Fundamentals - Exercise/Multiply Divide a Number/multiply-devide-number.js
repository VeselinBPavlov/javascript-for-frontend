function solve([a, b]) {
    if (a > b) {
        console.log(a / b);
    } else {
        console.log(a * b);
    }
}

// Test.
solve([5, 10]);
solve([10, 5]);