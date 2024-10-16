test("should return 0 for empty string", () => {
    expect(add("")).toBe(0)
});

test("should return the number itself when only one number is provided", () => {
    expect(add("1")).toBe(1)
});

test("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3)
});

test("should handle unknonwn amount of numbers", () => {
    expect(add("1,2,4,5,6")).toBe(18)
});

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
    expect(() => add("-1,2")).toThrow("Negative numbers not allowed: -1");
});

test('should show all negative numbers in exception message', () => {
    expect(() => add("-1,-2,3")).toThrow("Negative numbers not allowed: -1,-2");
});