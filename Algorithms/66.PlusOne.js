/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= -1; i--) {
        if (i === -1) {
            digits.unshift(1);
            break;
        }
        digits[i] += 1;
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            break;
        }
    }
    return digits;
};
