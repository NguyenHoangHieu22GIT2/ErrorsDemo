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
}
