//Reference https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  let rndgrades = [];
  for (let i = 0; i < grades.length; i++) {
    let next = Math.ceil(grades[i] / 5) * 5;
    if (grades[i] > 37) {
      if (next - grades[i] < 3) {
        rndgrades.push(next);
      } else {
        rndgrades.push(grades[i]);
      }
    } else {
      rndgrades.push(grades[i]);
    }
  }
  return rndgrades;
}
