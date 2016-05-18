/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) {
        return 0;
    }
    var m = grid.length, n = grid[0].length;
    var nums = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                nums++;
                var stack = [{ i: i, j: j }];
                while (stack.length) {
                    var c = stack.pop();
                    if (c.i < m - 1) {
                        if (grid[c.i + 1][c.j] === '1') {
                            grid[c.i + 1][c.j] = '0';
                            stack.push({ i: c.i + 1, j: c.j });
                        }
                    }
                    if (c.i > 0) {
                        if (grid[c.i - 1][c.j] === '1') {
                            grid[c.i - 1][c.j] = '0';
                            stack.push({ i: c.i - 1, j: c.j });
                        }
                    }
                    if (c.j < n - 1) {
                        if (grid[c.i][c.j + 1] === '1') {
                            grid[c.i][c.j + 1] = '0';
                            stack.push({ i: c.i, j: c.j + 1 });
                        }
                    }
                    if (c.j > 0) {
                        if (grid[c.i][c.j - 1] === '1') {
                            grid[c.i][c.j - 1] = '0';
                            stack.push({ i: c.i, j: c.j - 1 });
                        }
                    }
                }
            }
        }
    }
    return nums;
};
