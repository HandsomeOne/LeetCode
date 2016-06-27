/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let x = num;
    while (x * x > num) {
        x = (x + num / x) / 2 | 0;
    }
    return x * x === num;
};
