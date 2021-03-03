function validParentheses(parens){
    let isOpened = false;
    let numOfOpened = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            isOpened = true;
            numOfOpened++;
        }

        else if (parens[i] === ')' && isOpened) {
            numOfOpened--;
            if (numOfOpened === 0) {
                isOpened = false;
            }
        }
        else {
            return false;
        }
    }

    if (numOfOpened === 0 && isOpened === false) {
        return true;
    }
    else {
        return false;
    }
}