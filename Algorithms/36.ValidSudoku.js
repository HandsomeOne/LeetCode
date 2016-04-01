/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    function hasDuplicate(a) {
        var l = a.length;
        for (var i = 0; i < l; i++) {
            if (a[i] === '.') {
                continue;
            }
            for (var j = i + 1; j < l; j++) {
                if (a[i] === a[j]) {
                    return true;
                }
            }
        }
        return false;
    }
    for (var i = 0; i < 9; i++) {
        var verticle = '';
        var block = '';
        for (var j = 0; j < 9; j++) {
            verticle += board[j][i];
        }
        for (var j = 0; j < 3; j++) {
            block += board[i - i % 3 + j].slice(i % 3 * 3, i % 3 * 3 + 3).join('');
        }
        if (hasDuplicate(board[i]) || hasDuplicate(verticle) || hasDuplicate(block)) {
            return false;
        }
    }
    return true;
};
