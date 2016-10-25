/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var s = 1, _s = 1;
    for (var i = 1; i < n; i++) {
        var t = s;
        s += _s;
        _s = t;
    }
    return s;
};
