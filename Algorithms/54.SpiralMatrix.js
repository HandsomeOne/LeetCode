/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) {
        return [];
    }
    var top = 0, left = 0;
    var bottom = matrix.length - 1, right = matrix[0].length - 1;
    var list = [];
    var direction = 0;
    while (top <= bottom && left <= right) {
        var i;
        switch (direction) {
            case 0:
                for (i = left; i <= right; i++) {
                    list.push(matrix[top][i]);
                }
                top++;
                break;
            case 1:
                for (i = top; i <= bottom; i++) {
                    list.push(matrix[i][right]);
                }
                right--;
                break;
            case 2:
                for (i = right; i >= left; i--) {
                    list.push(matrix[bottom][i]);
                }
                bottom--;
                break;
            case 3:
                for (i = bottom; i >= top; i--) {
                    list.push(matrix[i][left]);
                }
                left++;
                break;
        }
        direction = (direction + 1) % 4;
    }
    return list;
};
