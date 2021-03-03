function anagrams(word, words) {
    let passedWords = [];
    for (const currentWord of words) {
        if (compareFreqOfLetters(word, currentWord)) {
            passedWords.push(currentWord);
        }
    }
    return passedWords;
}

function compareFreqOfLetters(word1, word2) {
    if (word1.length != word2.length) {
        return false;
    }
    else {
        freq1 = getFrequency(word1);
        freq2 = getFrequency(word2);

        let counter = 0;
        for (const [letter1, frequency1] of Object.entries(freq1)) {
            for (const [letter2, frequency2] of Object.entries(freq2)) {
                if (letter1 === letter2 && frequency1 === frequency2) {
                    counter++;
                }
            }
        }

        const mySet = new Set(word1);
        if (counter === mySet.size) {
            return true;
        }
        else {
            return false;
        }
    }
}

function getFrequency(word) {
    let freq = {};
    for (let i = 0; i < word.length; i++) {
        let character = word.charAt(i);
        if (freq[character]) {
            freq[character]++;
        }
        else {
            freq[character] = 1;
        }
    }
    return freq;
}