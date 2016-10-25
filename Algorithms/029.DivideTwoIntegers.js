/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === -2147483648) {
        return dividend === -2147483648 ? 1 : 0;
    }
    let isNegative = false;
    let plus1 = false;
    if (divisor < 0) {
        divisor = -divisor;
        dividend = ~dividend;
        plus1 = !plus1;
    }
    if (dividend < 0) {
        dividend = ~dividend;
        plus1 = !plus1;
        isNegative = true;
    }
    let b = 1;
    const stack = [1];
    while (divisor < dividend >> 1) {
        divisor <<= 1;
        b <<= 1;
        stack.push(b);
    }
    let result = 0;
    while (stack.length) {
        while (dividend >= divisor) {
            result += stack[stack.length - 1];
            dividend -= divisor;
        }
        stack.pop();
        if (stack.length) {
            divisor >>= 1;
        }
    }
    if (isNegative) {
        result = ~result;
        if (!plus1 || dividend + 1 < divisor) {
            result += 1;
        }
    } else if (plus1 && dividend + 1 >= divisor && result < 2147483647) {
        result += 1;
    }
    return result;
};
