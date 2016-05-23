/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    for (var s of strs) {
        var sorted = s.split('').sort().join('');
        map[sorted] = map[sorted] || [];
        map[sorted].push(s);
    }
    var result = [];
    for (var list of map) {
        result.push(list.sort());
    }
    return result;
};
