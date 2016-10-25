/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var list = s.trim().split(' ');
    return list[list.length - 1] ? list[list.length - 1].length : 0;
};
