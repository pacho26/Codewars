function nbDig(n, d) {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    counter += Math.pow(i, 2)
      .toString()
      .split('')
      .filter((elem) => +elem === d).length;
  }
  return counter;
}
