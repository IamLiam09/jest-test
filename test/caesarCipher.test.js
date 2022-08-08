const caesarCipher = require("../src/caesarCipher.js")
test('works with z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a');
});
test('works with uppercase', () => {
    expect(caesarCipher('A', 1)).toBe('B');
});
test('works with lowercase', () => {
    expect(caesarCipher('a', 1)).toBe('b');
});
test('works with punctuation', () => {
    expect(caesarCipher("Hello, World!", 5)).toBe('Mjqqt, Btwqi!');
});