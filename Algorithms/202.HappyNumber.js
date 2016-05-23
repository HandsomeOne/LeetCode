/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var a = [n];
    while (n !== 1) {
        n = n.toString().split('').reduce((s, num) => s + num * num, 0);
        if (a.some(isN)) {
            return false;
        } else {
            a.push(n);
        }
    }
    return true;
    function isN(num) {
        return num === n;
    }
};
