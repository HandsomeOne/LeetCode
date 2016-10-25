/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var s = [1];
    for (var i = 1; i < n; i++) {
        var _s = [];
        var l = s.length;
        var last = 0;
        for (var j = 0; j < l; j++) {
            if (s[j] === last) {
                _s[_s.length - 2] += 1;
            } else {
                _s.push(1, s[j]);
            }
            last = s[j];
        }
        s = _s;
    }
    return s.join('');
};
