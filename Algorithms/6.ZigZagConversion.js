/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var converted = '';
    var l = s.length;
    for (var i = 0; i < numRows; i++) {
        if (i === 0) {
            for (var j = 0; 2 * j * (numRows - 1) < l; j++) {
                converted += s[2 * j * (numRows - 1)];
            }
        } else if (i === numRows - 1) {
            for (var j = 0; (2 * j + 1) * (numRows - 1) < l; j++) {
                converted += s[(2 * j + 1) * (numRows - 1)];
            }
        } else {
            for (var j = 0; 2 * j * (numRows - 1) < l; j++) {
                converted += s[2 * j * (numRows - 1) + i] || '';
                converted += s[2 * (j + 1) * (numRows - 1) - i] || '';
            }
        }
    }
    return converted;
};
