/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var result = 1;
    for (var i = 1; i <= m - 1; i++) {
        result *= n - 1 + i;
        result /= i;
    }
    return result;
};
