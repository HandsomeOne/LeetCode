/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var perfect = [0, 1];
    for (var i = 2; i <= n; i++) {
        var sqrt = Math.sqrt(i) | 0;
        var min = Infinity;
        for (var j = sqrt; j > 0; j--) {
            min = Math.min(min, 1 + perfect[i - j * j]);
            if (min <= 2) {
                break;
            }
        }
        perfect.push(min);
    }
    return perfect[n];
};
