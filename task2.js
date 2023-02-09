function isPrimeNumber(num) {
  if (num <= 0 || num > 1000) {
    return "is not correct!";
  }

  if (num === 1) {
    return "это не простое число";
  }

  if (num === 2) {
    return "это простое число";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "это не простое число";
    }
  }

  return "это простое число";
}

console.log(isPrimeNumber(6))