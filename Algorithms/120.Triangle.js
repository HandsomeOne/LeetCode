/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var h = triangle.length;
    var minimums = triangle[h - 1].slice();
    while (h > 1) {
        for (var i = 0; i < h - 1; i++) {
            minimums[i] = Math.min(minimums[i], minimums[i + 1]) + triangle[h - 2][i];
        }
        minimums.pop();
        h--;
    }
    return minimums[0];
};
