function biggerNumber ([a, b]) {
    if (Number(a) > Number(b)) {
        console.log(a);
    } else {
        console.log(b);
    }
}

// Test.
biggerNumber([20, 10]);
biggerNumber([20, 30]);