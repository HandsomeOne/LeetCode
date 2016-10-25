/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s[0] === '0') {
        return 0;
    }
    var l = s.length;
    var a = [1, 1];
    for (var i = 2; i <= l; i++) {
        a[i] = 0;
        if (s[i - 1] > 0) {
            a[i] += a[i - 1];
        }
        if (10 <= s.substr(i - 2, 2) && s.substr(i - 2, 2) <= 26) {
            a[i] += a[i - 2];
        }
    }
    return a[l];
};
