/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) {
        return [];
    }
    var triangle = [[1]];
    var row = [1];
    for (var i = 1; i < numRows; i++) {
        row = row.map(function(num, i) {
            return num + (row[i - 1] || 0);
        });
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};
