/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) {
        return 0;
    }
    var nums = 0;
    grid.forEach((row, x) => {
        row.forEach((cell, y) => {
            if (cell === '1') {
                nums++;
                var stack = [{ i: x, j: y }];
                while (stack.length) {
                    var c = stack.pop();
                    var i = c.i, j = c.j;
                    if (i + 1 < grid.length && grid[i + 1][j] === '1') {
                        grid[i + 1][j] = '0';
                        stack.push({ i: i + 1, j });
                    }
                    if (i > 0 && grid[i - 1][j] === '1') {
                        grid[i - 1][j] = '0';
                        stack.push({ i: i - 1, j });
                    }
                    if (grid[i][j + 1] === '1') {
                        grid[i][j + 1] = '0';
                        stack.push({ i, j: j + 1 });
                    }
                    if (grid[i][j - 1] === '1') {
                        grid[i][j - 1] = '0';
                        stack.push({ i, j: j - 1 });
                    }
                }
            }
        });
    });
    return nums;
};
