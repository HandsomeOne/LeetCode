/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    return board.some((row, i) =>
        row.some((s, j) =>
            s === word[0] && search([{ i, j }])));
    function search(stack) {
        if (stack.length === word.length) {
            return true;
        }
        var c = stack[stack.length - 1];
        var i = c.i, j = c.j;
        var neighbors = [];
        if (i > 0) { neighbors.push({ i: i - 1, j }); }
        if (j + 1 < board[0].length) { neighbors.push({ i, j: j + 1 }); }
        if (i + 1 < board.length) { neighbors.push({ i: i + 1, j }); }
        if (j > 0) { neighbors.push({ i, j: j - 1 }); }
        for (var k in neighbors) {
            var n = neighbors[k];
            if (check(n.i, n.j, stack)) {
                stack.push(n);
                if (search(stack)) { return true; }
            }
        }
        stack.pop();
        return false;
    }
    function check(i, j, stack) {
        return board[i][j] === word[stack.length] && stack.every(c => i !== c.i || j !== c.j);
    }
};
