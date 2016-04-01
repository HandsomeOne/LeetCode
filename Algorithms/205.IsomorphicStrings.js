/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
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
