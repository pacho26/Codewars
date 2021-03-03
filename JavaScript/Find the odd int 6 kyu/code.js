function findOdd(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        if(!obj[A[i]]) {
            obj[A[i]] = 0;
        }
        obj[A[i]]++;
    }

    for (const key in obj) {
        if (obj[key] % 2 != 0) {
            return +key;
        }
    }
}