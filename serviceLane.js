// Link to question: https://www.hackerrank.com/challenges/service-lane/problem

function serviceLane(width, cases) {
  let maxVehicleWidth = [];
  for (let l = 0; l < cases.length; l++) {
    let i = cases[l][0];
    let j = cases[l][1];
    let acc = [];

    for (let k = i; k <= j; k++) {
      acc.push(width[k]);
    }
    // console.log(acc);
    maxVehicleWidth.push(Math.min(...acc));
  }
  return maxVehicleWidth;
}

serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]);
