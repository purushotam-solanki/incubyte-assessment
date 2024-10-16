const add = (str) => {
    if (!str) {
        return 0
    };
    //Default delimiter can be (comma) or (newLine)
    let delimiter = /,|\n/
    if (str.startsWith('//')) {
        const delimiterEnd = str.indexOf('\n');
        delimiter = str.slice(2, delimiterEnd);
        str = str.slice(delimiterEnd + 1)
    };
    const numArr = str.split(delimiter).map(num => Number(num));
    const negativeNums = numArr.filter(num => num < 0);
    if (negativeNums.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNums.join(',')}`)
    };
    const sum = numArr.reduce((acc, curr) => acc += curr, 0);
    return sum
};

module.exports = { add }