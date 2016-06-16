/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    var cache = [''];
    var a = [];
    for (var i = num2.length - 1; i >= 0; i--) {
        var d = num2[i];
        if (!(d in cache)) {
            cache[d] = multiplyByDigit(num1, d);
        }
        a.push(cache[d]);
    }

    var carry = 0, result = '', l = a.length;
    var m = a[l - 1].length + l;
    for (var j = 1; j < m; j++) {
        var t = 0;
        for (var k = 0; k < j && k < l; k++) {
            t += (+a[k][a[k].length - j + k] || 0);
        }
        t += carry;
        result = (t % 10) + result;
        carry = t / 10 | 0;
    }
    if (carry) {
        result = carry + result;
    }
    return result;

    function multiplyByDigit(num, d) {
        var carry = 0, result = '';
        for (var i = num.length - 1; i >= 0; i--) {
            var n = num[i];
            var t = d * n + carry;
            result = (t % 10) + result;
            carry = t / 10 | 0;
        }
        if (carry) {
            result = carry + result;
        }
        return result;
    }
};
