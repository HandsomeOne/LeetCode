/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var carry = 0;
    var result = '';
    a = a.split('').map(parseFloat);
    b = b.split('').map(parseFloat);
    while (a.length || b.length || carry) {
        var r = (a.pop() || 0) + (b.pop() || 0) + carry;
        carry = r > 1 ? 1 : 0;
        r %= 2;
        result = r + result;
    }
    return result;
};
