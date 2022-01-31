function factorial(n) {
  let res = 1;
  for (i = 0; i < n; i++) {
    res = res * (n - i);
  }
  return res;
}

