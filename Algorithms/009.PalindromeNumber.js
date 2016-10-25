/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var length = (Math.log10(x) | 0) + 1;
    while (length > 1) {
        var first = x / Math.pow(10, length - 1) | 0;
        var last = x % 10;
        if (first !== last) {
            return false;
        }
        x = x % Math.pow(10, length - 1);
        x = x / 10 | 0;
        length -= 2;
    }
    return true;
};
