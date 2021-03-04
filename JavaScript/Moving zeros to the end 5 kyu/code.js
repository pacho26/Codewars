let moveZeros = function (arr) {
    let result = [];
    let counter = 0;
    for (const elem of arr) {
        if (elem === 0) {
            counter++;
        } else {
            result.push(elem);
        }
    }

    for (let i = 0; i < counter; i++) {
        result.push(0);
    }
    return result;
}