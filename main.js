class calculator {
  add(a, b) {
    console.log(b, a)
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
    if (n !== 0) {
      return this.square(a * a, n - 1);
    }
    return a;
  }
}

const calculatorInstance = new calculator();

console.log(calculatorInstance.square(10, 2));

console.log(calculatorInstance.add(3, 2));


console.log(1)
console.log(2)
console.log(3)
