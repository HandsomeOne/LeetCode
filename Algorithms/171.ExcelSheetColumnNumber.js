/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var _0 = 'A'.charCodeAt() - 1;
    return s.split('').reduce((a, b) => a * 26 + b.charCodeAt() - _0, 0);
};
