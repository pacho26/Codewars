snail = function(matrix) {
    if (matrix[0].length === 0) {
        return [];
    }
    
    let n = matrix.length;
    let result = [];
    let counter = 0;

    while (n > counter) {
    // UPPER ROW
    for (let i = counter; i < n; i++) {
        result.push(matrix[counter][i]);
    }

    // RIGHT COLUMN
    for (let i = counter + 1; i < n; i++) {
        result.push(matrix[i][n - 1]);
    }

    // LOWER ROW
    for (let i = n - 2; i >= counter; i--) {
        result.push(matrix[n - 1][i]);
    }

    // LEFT COLUMN
    for (let i = n - 2; i >= counter + 1; i--) {
        result.push(matrix[i][counter])
    }

    counter++, n--;
    }
    
    return result;
}