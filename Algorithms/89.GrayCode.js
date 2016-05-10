/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var code = [0];
    for (var i = 0; i < n; i++) {
        for (var j = code.length - 1; j >= 0; j--) {
            code.push(code[j] + (1 << i));
        }
    }
    return code;
};
