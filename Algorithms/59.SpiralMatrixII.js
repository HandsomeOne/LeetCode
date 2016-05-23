/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var matrix = [];
    for (var k = 0; k < n; k++) {
        matrix[k] = [];
    }
    for (var offset = 0; offset < n >> 1; offset++) {
        var start = 4 * offset * (n - offset) + 1;
        var i = 0;
        var side = n - 2 * offset - 1;
        while (i < side) {
            matrix[offset][offset + i] = i + start;
            matrix[offset + i][n - 1 - offset] = i + start + side;
            matrix[n - 1 - offset][n - 1 - offset - i] = i + start + 2 * side;
            matrix[n - 1 - offset - i][offset] = i + start + 3 * side;
            i++;
        }
    }
    if (n % 2) {
        matrix[n >> 1][n >> 1] = n * n;
    }
    return matrix;
};
