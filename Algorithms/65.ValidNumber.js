/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (/^\s*$/.test(s)) {
        return false;
    }
    return !isNaN(+s);
};
