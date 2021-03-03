function iqTest(numbers){
    let arrayOfNumbers = [];
    let tempString = '';
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === ' ') {
            arrayOfNumbers.push(+tempString);
            tempString = '';
        }
        else {
            tempString += numbers[i];
        }

        if (i === numbers.length - 1) {
            arrayOfNumbers.push(+tempString);
        }
    }
    let even = arrayOfNumbers.filter(num => num % 2 === 0);
    let odd = arrayOfNumbers.filter(num => num % 2 === 1);
    let index = 0;
    if (even.length === 1) {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] % 2 === 0) {
                return i + 1;
            }
        }
    }
    else {
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] % 2 === 1) {
                return i + 1;
            }
        }
    }
}