/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    return s.split('').map(str => map[str]).reduceRight((sum, num, i, self) => {
        if (num < self[i + 1]) {
            return sum - num;
        } else {
            return sum + num;
        }
    });
};
