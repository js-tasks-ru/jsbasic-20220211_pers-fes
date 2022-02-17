function factorial(n) {
  let result = 1;

  if (n == 0 || n == 1) {
      return 1;
  } else {
  for (let i = n; i >= 2; i--) {
          result *= i;
      };
      
      return result;
  }
}
