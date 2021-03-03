function humanReadable(seconds) {
    const secondsValue = +seconds;
    const hours = Math.floor(secondsValue / 3600);
    const minutes = Math.floor(secondsValue % 3600 / 60);
    const secondsLeft = secondsValue - hours * 3600 - minutes * 60;
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + secondsLeft).slice(-2);
}