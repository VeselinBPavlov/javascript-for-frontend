function solve(input) {
    let length = input.shift();
    let arr = [];

    for (let inxVal of input) {
        let [index, value] = inxVal.split(" - ");
        arr[Number(index)] = Number(value);
    }

    for (let i = 0; i < length; i++) {
        if (typeof arr[i] !== 'number') {
            arr[i] = 0;
        }
        console.log(arr[i]);
    }
}

// Test.
solve([5, "0 - 5", "1 - 6", "2 - 7"]);