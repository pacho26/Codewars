let moveZeros = function (arr) {
    const withoutZerosArr = arr.filter(num => num !== 0);
    const zerosArr = arr.filter(num => num === 0);
    return withoutZerosArr.concat(zerosArr);
}
