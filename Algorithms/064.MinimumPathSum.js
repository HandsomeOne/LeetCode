/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var paths = [];
    for (var i = m - 1; i >= 0; i--) {
        var a = [];
        for (var j = n - 1; j >= 0; j--) {
            a[j] = grid[i][j] + (i === m - 1 ?
                a[j + 1] || 0 :
                Math.min(paths[i + 1][j], j === n - 1 ? Infinity : a[j + 1])
            );
        }
        paths[i] = a;
    }
    return paths[0][0];
};
