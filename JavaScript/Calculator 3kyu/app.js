const Calculator = function () {
  this.evaluate = (string) => {
    string = string.split(' ');
    let simplified = [];
    let priorityOperations = [];

    for (let i = 0; i < string.length; i++) {
      if (!(string[i] === '+' || string[i] === '-')) {
        priorityOperations.push(string[i]);
      } else {
        simplified.push(calculatePriorities(priorityOperations));
        simplified.push(string[i]);
        priorityOperations = [];
      }
    }

    simplified.push(calculatePriorities(priorityOperations));

    function calculatePriorities(arr) {
      let result = +arr[0];

      for (let i = 1; i < arr.length; i = i + 2) {
        switch (arr[i]) {
          case '*':
            result *= +arr[i + 1];
            break;
          case '/':
            result /= +arr[i + 1];
            break;
          case '+':
            result += +arr[i + 1];
            break;
          default:
            result -= +arr[i + 1];
            break;
        }
      }

      return result;
    }

    return calculatePriorities(simplified);
  };
};