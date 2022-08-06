const calculator = {
    add: (x , y) => {
            let num1 = Number(x)
            let num2 = Number(y)
            return num1 + num2
        },
    subtract: (x, y) => {
            let num1 = Number(x)
            let num2 = Number(y)
            return num1 - num2
        },

    divide: (x , y) => {
        let num1 = Number(x)
        let num2 = Number(y)
        return num1 / num2
    },

    multiply: (x , y) => {
        let num1 = Number(x)
        let num2 = Number(y)
        return num1 * num2
    },
}
calculator.add(2, 2)
calculator.subtract(4, 2)
calculator.divide(6, 2)
calculator.multiply(2, 2)

module.exports = calculator