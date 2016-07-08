/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    a %= 1337;
    let mod = 1;
    let m = a;
    for (let i = b.length - 1; i >= 0; i--) {
        let t = 1, n = 0;
        while (n < b[i]) {
            t *= m;
            t %= 1337;
            n++;
        }
        mod *= t;
        mod %= 1337;
        while (n < 10) {
            t *= m;
            t %= 1337;
            n++;
        }
        m = t;
    }
    return mod;
};
