class calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  mutilply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  module(a, b) {
    return a % b;
  }
  real(a, b) {
    return (a / b).toFixed(10);
  }
  squareRoot(a) {
    return Math.sqrt(a);
  }
  square(a, n) {
    if (n !== 1) {
      return this.square(a * a, n - 1);
    }
    return a;
  }
}

const calculatorInstance = new calculator();

console.log(calculatorInstance.square(5, 2));
