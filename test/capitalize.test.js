const capitalize = require("../src/capitalize.js")
test("capitalize the first letter of the word", () => {
    expect(capitalize("barbie")).toBe("Barbie")
})
