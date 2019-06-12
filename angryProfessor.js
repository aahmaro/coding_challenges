function angryProfessor(k, a) {
  let acc = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      acc++;
    }
  }
  if (acc < k) {
    return "YES";
  } else {
    return "NO";
  }
}