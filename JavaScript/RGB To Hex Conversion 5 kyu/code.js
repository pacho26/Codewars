function rgb(r, g, b){
    let hexString = '';

    r = outOfBoundsCheck(r).toString(16);
    g = outOfBoundsCheck(g).toString(16);
    b = outOfBoundsCheck(b).toString(16);

    hexString += addZeroIfNeeded(r);
    hexString += addZeroIfNeeded(g);
    hexString += addZeroIfNeeded(b);

    return hexString.toUpperCase();
}

function outOfBoundsCheck(x) {
  if (x > 255) {
    return 255;
  } else if (x < 0) {
    return 0;
  } else {
    return x;
  }
}

function addZeroIfNeeded(x) {
    if (x.length < 2) {
        x = '0' + x.charAt(0);
    }
    return x;
}