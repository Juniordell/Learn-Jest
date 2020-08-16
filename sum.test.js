const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

// opposite

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2

    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3)  // This works
})