function rot13(message){
    let newString = '';
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) < 65) {
            newString += message[i];
        }
        else if (message.charCodeAt(i) <= 90 && message.charCodeAt(i) >= 65) {
            if (message.charCodeAt(i) < 78) {
                newString += String.fromCharCode(message.charCodeAt(i) + 13);
            }
            else {
                newString += String.fromCharCode(message.charCodeAt(i) - 13);
            }
        }
        else {
            if (message.charCodeAt(i) < 110) {
                newString += String.fromCharCode(message.charCodeAt(i) + 13);
            }
            else {
                newString += String.fromCharCode(message.charCodeAt(i) - 13);
            }
        }
    }
    return newString;
}