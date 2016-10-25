/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }
    var prefix = strs[0];
    for (var i = 1, l = strs.length; i < l; i++) {
        if (!prefix) {
            break;
        }
        for (var j = 0, m = prefix.length; j < m; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.slice(0, j);
                break;
            }
        }
    }
    return prefix;
};
