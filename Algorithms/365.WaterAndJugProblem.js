/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    function gcd(a, b) {
        while (a !== b) {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }
        }
        return a;
    }
    if (z === 0) {
        return true;
    }
    if (x === 0 || y === 0) {
        return z === x + y;
    }
    return z <= x + y && z % gcd(x, y) === 0;
};
