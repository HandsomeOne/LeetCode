/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var a = [n];
    while (n !== 1) {
        n = n.toString().split('').reduce(function(s, num) {
            return s + num * num;
        }, 0);
        if (a.some(function(num) {
            return num === n;
        })) {
            return false;
        } else {
            a.push(n);
        }
    }
    return true;
};
