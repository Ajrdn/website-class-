function calcSum(n) {
  let sum = 0;
  for(let i = 1; i < n + 1; i++) {
    sum += i;
  }
  document.write(sum);
}

calcSum(10);