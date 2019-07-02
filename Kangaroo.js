// Link to problem: https://www.hackerrank.com/challenges/kangaroo/problem

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  let test = (x1 - x2) / (v2 - v1);

  if (Number.isInteger(test) && test > 0) {
    return "YES";
  } else {
    return "NO";
  }
}
