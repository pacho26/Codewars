function solution(arr) {
  let result = '';
  repetitions = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i] + 2) {
      repetitions++;
    } else if (arr[i + 1] === arr[i] + 1 && repetitions > 0) {
      result += `${arr[i - repetitions]}-${arr[i + 1]},`;
      repetitions = 0;
      i++;
    } else {
      result += arr[i].toString() + ',';
    }
  }
  return result.slice(0, -1);
}