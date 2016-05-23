/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var bits = 0;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        bits++;
    }
    return m << bits;
};
