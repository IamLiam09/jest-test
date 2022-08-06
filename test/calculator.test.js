const calculator = require("../src/calculator.js")
test("adds 2 + 2 to be 4", () => {
    expect(calculator.add(2, 2)).toBe(4)
})
test("subtract 4 - 2 to be 2", () => {
    expect(calculator.subtract(4, 2)).toBe(2)
})
test("divide 6 / 2 to be 4", () => {
    expect(calculator.divide(6, 2)).toBe(3)
})
test("multiply 2 + 2 to be 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4)
})
