//Reference : https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  let acc = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];

      if (sum == b) return sum;

      if (sum < b && sum > acc) {
        acc = sum;
      }
    }
  }

  return acc || -1;
}
