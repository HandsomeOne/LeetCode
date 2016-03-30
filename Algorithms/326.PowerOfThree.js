/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
    return /^10*$/.test(n.toString(3));
};