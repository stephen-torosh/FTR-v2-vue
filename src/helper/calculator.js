export function plus(a, b) {
  return a + b
}

export function minus(a, b) {
  return a - b
}

export function multiply(a, b) {
  return a * b
}

export function divide(a, b) {
  return a / b
}

export function doTheLastAction(action, a, b) {
  switch (action) {
    case '+':
      return String(plus(a, b))
    case '-':
      return String(minus(a, b))
    case '*':
      return String(multiply(a, b))
    case '/':
      return String(divide(a, b))
    default:
      return '0'
  }
}
