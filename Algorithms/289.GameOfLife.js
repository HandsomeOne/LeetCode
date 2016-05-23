/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var r = board.length;
    var l = board[0].length;
    var i, j;
    for (i = 0; i < r; i++) {
        for (j = 0; j < l; j++) {
            var liveNeighbors = 0;
            if (board[i - 1]) {
                liveNeighbors +=
                    (board[i - 1][j - 1] > 0) +
                    (board[i - 1][j] > 0) +
                    (board[i - 1][j + 1] > 0);
            }
            if (board[i + 1]) {
                liveNeighbors +=
                    (board[i + 1][j - 1] > 0) +
                    (board[i + 1][j] > 0) +
                    (board[i + 1][j + 1] > 0);
            }
            liveNeighbors +=
                (board[i][j - 1] > 0) +
                (board[i][j + 1] > 0);
            if (board[i][j] && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = 2;
            } else if (!board[i][j] && liveNeighbors === 3) {
                board[i][j] = -1;
            }
        }
    }
    for (i = 0; i < r; i++) {
        for (j = 0; j < l; j++) {
            if (board[i][j] === -1) {
                board[i][j] = 1;
            } else if (board[i][j] === 2) {
                board[i][j] = 0;
            }
        }
    }
};
