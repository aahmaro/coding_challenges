// Link to problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        output += " ";
      } else {
        output += "#";
      }
    }
    output += "\n";
  }
  console.log(output);
}

staircase(5);
