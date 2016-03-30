/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false;
    }
    return /^10*$/.test(n.toString(2));
};
