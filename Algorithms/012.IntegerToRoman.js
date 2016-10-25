/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var map = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    };
    var a = [], base = 1;
    while (num) {
        var digit = num % 10;
        if (digit === 4) {
            a.unshift(base, 5 * base);
        } else if (digit === 9) {
            a.unshift(base, 10 * base);
        } else {
            for (var i = 0; i < digit % 5; i++) {
                a.unshift(base);
            }
            if (digit >= 5) {
                a.unshift(5 * base);
            }
        }
        num = num / 10 | 0;
        base *= 10;
    }
    return a.map(n => map[n]).join('');
};
