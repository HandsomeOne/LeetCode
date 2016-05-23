/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length, n = matrix[0].length;
    if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) {
        return false;
    }
    var start = 0, end = m * n - 1;
    do {
        var middle = (start + end) / 2 | 0;
        if (matrix[start / n | 0][start % n] === target ||
            matrix[end / n | 0][end % n] === target ||
            matrix[middle / n | 0][middle % n] === target) {
            return true;
        }
        if (matrix[middle / n | 0][middle % n] > target) {
            end = middle;
        } else {
            start = middle;
        }
    } while (end - start >= 2);
    return false;
};
