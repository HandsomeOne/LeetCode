/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while (/\(\)|\[\]|\{\}/.test(s)) {
        s = s.replace(/\(\)|\[\]|\{\}/g, '');
    }
    return s === '';
};
