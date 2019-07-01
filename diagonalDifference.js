// Link to problem : https://www.hackerrank.com/challenges/diagonal-difference/problem
function diagonalDifference(arr) {
  let n = arr.length;
  let primeAcc = 0;
  let secAcc = 0;
  for (let i = 0; i < n; i++) {
    primeAcc += arr[i][i];
    secAcc += arr[i][n - (i + 1)];
  }

  return Math.abs(primeAcc - secAcc);
}

let arr1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
diagonalDifference(arr1);
