/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [1];
    for (var i = 0; i < rowIndex; i++) {
        for (var j = row.length - 1; j >= 0; j--) {
            row[j] += (row[j - 1] || 0);
        }
        row.push(1);
    }
    return row;
};
