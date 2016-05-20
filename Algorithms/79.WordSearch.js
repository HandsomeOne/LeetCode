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
        if (i - 1 >= 0 && check(i - 1, j, stack)) {
            stack.push({ i: i - 1, j });
            if (search(stack)) { return true; }
        }
        if (check(i, j + 1, stack)) {
            stack.push({ i, j: j + 1 });
            if (search(stack)) { return true; }
        }
        if (i + 1 < board.length && check(i + 1, j, stack)) {
            stack.push({ i: i + 1, j });
            if (search(stack)) { return true; }
        }
        if (check(i, j - 1, stack)) {
            stack.push({ i, j: j - 1 });
            if (search(stack)) { return true; }
        }
        stack.pop();
        return false;
    }
    function check(i, j, stack) {
        return board[i][j] === word[stack.length] && stack.every(c => i !== c.i || j !== c.j);
    }
};
