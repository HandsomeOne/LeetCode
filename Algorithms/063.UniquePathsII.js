/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var paths = [];
    for (var i = m - 1; i >= 0; i--) {
        var a = [];
        for (var j = n - 1; j >= 0; j--) {
            if (obstacleGrid[i][j] === 0) {
                if (paths.length) {
                    a.unshift((a[0] || 0) + paths[0][j]);
                } else {
                    if (a.length) {
                        a.unshift(a[0]);
                    } else {
                        a.unshift(1);
                    }
                }
            } else {
                a.unshift(0);
            }
        }
        paths.unshift(a);
    }
    return paths[0][0];
};
