/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var zeroes = 0;
    while (5 <= n) {
        zeroes += n / 5 | 0;
        n /= 5;
    }
    return zeroes;
};
