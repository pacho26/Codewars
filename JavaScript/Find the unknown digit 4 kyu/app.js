function solveExpression(exp) {
  let number1 = (number2 = resultNumber = operator = '');
  let appearedDigits = new Set();
  let firstNegative = (secondNegative = resultNegative = bioRazmak = false);

  seperateNumbers();

  let notAppearedDigits = filterAppearingDigits(appearedDigits);

  if (skipZeros(number1) || skipZeros(number2) || skipZeros(resultNumber)) {
    notAppearedDigits.delete(0);
  }

  for (digit of notAppearedDigits) {
    let tryNumber1 = replaceWithDigit(number1, digit);
    let tryNumber2 = replaceWithDigit(number2, digit);
    let tryResultNumber = replaceWithDigit(resultNumber, digit);

    tryNumber1 = testIfNegative(tryNumber1, firstNegative);
    tryNumber2 = testIfNegative(tryNumber2, secondNegative);
    tryResultNumber = testIfNegative(tryResultNumber, resultNegative);

    if (
      (missingDigit = checkOperator(
        operator,
        tryNumber1,
        tryNumber2,
        tryResultNumber
      )) !== undefined
    ) {
      return missingDigit;
    }

    tryNumber1 = tryNumber2 = tryResultNumber = '';
  }

  function seperateNumbers() {
    for (let i = 0; i < exp.length; i++) {
      if (i === 0) {
        if (exp[i] === '-') {
          firstNegative = true;
          continue;
        }
      }
      if (
        (exp[i] === '+' || exp[i] === '-' || exp[i] === '*') &&
        operator.length === 0
      ) {
        operator = exp[i];
        continue;
      }

      if (exp[i] === '=') {
        bioRazmak = true;
        continue;
      }

      if (exp[i] === '-') {
        if (bioRazmak) {
          resultNegative = true;
          continue;
        } else {
          secondNegative = true;
          continue;
        }
      }

      if (exp[i] !== '?') {
        appearedDigits.add(+exp[i]);
      }

      if (bioRazmak) {
        resultNumber += exp[i];
      } else if (operator.length === 1) {
        number2 += exp[i];
      } else {
        number1 += exp[i];
      }
    }
  }

  function filterAppearingDigits(setForFiltering) {
    return new Set(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((d) => !setForFiltering.has(d))
    );
  }

  function skipZeros(str) {
    if (str[0] === '?' && str.length > 1) {
      return true;
    }
    return false;
  }

  function replaceWithDigit(x, digit) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] === '?') {
        result += digit;
        continue;
      }
      result += x[i];
    }
    return result;
  }

  function testIfNegative(x, isNegative) {
    if (isNegative) {
      return -x;
    }
    return x;
  }

  function checkOperator(operator, num1, num2, result) {
    if (operator === '+') {
      if (+num1 + +num2 === +result) {
        return digit;
      }
    } else if (operator === '-') {
      if (+num1 - +num2 === +result) {
        return digit;
      }
    } else {
      if (+num1 * +num2 === +result) {
        return digit;
      }
    }
  }

  return -1;
}
