/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var pool = [[''], ['()']];
    for (var i = 2; i <= n; i++) {
        var list = [];
        for (var j = 0; j < i; j++) {
            for (var x in pool[j]) {
                for (var y in pool[i - 1 - j]) {
                    list.push('(' + pool[j][x] + ')' + pool[i - 1 - j][y]);
                }
            }
        }
        pool.push(list);
    }
    return pool[n];
};
