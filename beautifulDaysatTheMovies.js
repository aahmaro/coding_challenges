function beautifulDays(i, j, k) {
  let acc = 0;
  function reversedNum(num) {
    return parseFloat(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  }

  for (let x = i; x <= j; x++) {
    if (Number.isInteger((x - reversedNum(x)) / k)) {
      acc++;
    }
  }
  return acc;
}
