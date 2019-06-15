// Link to Question:https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  function ab(arr, ref) {
    return arr.map(x => x + ref);
  }

  let abApples = ab(apples, a);
  let abOranges = ab(oranges, b);

  function inRange(arr) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= s && arr[i] <= t) {
        acc++;
      }
    }
    return acc;
  }

  console.log(`${inRange(abApples)}\n${inRange(abOranges)}`);
}
