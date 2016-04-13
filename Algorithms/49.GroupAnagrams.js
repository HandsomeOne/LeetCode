/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    for (var i in strs) {
        var sorted = strs[i].split('').sort().join('');
        map[sorted] = map[sorted] || [];
        map[sorted].push(strs[i]);
    }
    var result = [];
    for (var j in map) {
        result.push(map[j].sort());
    }
    return result;
};
