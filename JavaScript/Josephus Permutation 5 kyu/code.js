function josephus(items, k) {
    let result = [], tempArr = [];
    let step = 1;
    while (items.length  0) {
        for (let i = 0; i  items.length; i++) {
            if (step % k === 0) {
                result.push(items[i]);
                step = 1;
            } else {
                tempArr.push(items[i]);
                step++;
            }
        }
        items = tempArr;
        tempArr = [];
    }
    return result;
}