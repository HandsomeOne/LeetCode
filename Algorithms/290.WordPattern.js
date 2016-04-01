/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var s = str.split(' '), t = pattern;
    if (s.length !== t.length) {
        return false;
    }
    var map = {};
    var inverseMap = {};
    for (var i = 0, l = s.length; i < l; i++) {
        if ((map[s[i]] && map[s[i]] !== t[i])
            || (inverseMap[t[i]] && inverseMap[t[i]] !== s[i])) {
            return false;
        }
        map[s[i]] = t[i];
        inverseMap[t[i]] = s[i];
    }
    return true;
};
