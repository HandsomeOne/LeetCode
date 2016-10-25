/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n >= 0) {
        var exp = [];
        for (var i = 1; i <= n; i *= 2) {
            exp.push(x);
            x *= x;
        }
        var result = 1;
        while (n) {
            var factor = exp.shift();
            if (n & 1) {
                result *= factor;
            }
            n >>= 1;
        }
        return result;
    } else {
        return 1 / (x * myPow(x, ~n));
    }
};
