/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var sqrt = x;
    while (sqrt * sqrt > x) {
        sqrt = (sqrt + x / sqrt) >> 1;
    }
    return sqrt;
};
