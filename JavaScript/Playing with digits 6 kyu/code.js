function digPow(n, p){
    const temp = n.toString();
    let sum = 0;
    for (let i = 0; i < temp.length; i++) {
        sum += Math.pow(+temp[i], p)
        p++;
    }
    if (sum % n === 0) {
        return sum / n;
    }
    else {
        return -1;
    }
}