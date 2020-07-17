const sum = require('./sum');

test('add 2 + 2 and does not equal 5', () => {
    expect(sum(2,2)).toBe(5);
})