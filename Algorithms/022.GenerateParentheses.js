/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var pool = [[''], ['()']];
    for (var i = 2; i <= n; i++) {
        var list = [];
        for (var j = 0; j < i; j++) {
            for (var x of pool[j]) {
                for (var y of pool[i - 1 - j]) {
                    list.push('(' + x + ')' + y);
                }
            }
        }
        pool.push(list);
    }
    return pool[n];
};
