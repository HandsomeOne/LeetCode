/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let d = 1, carry = 0, sum = 0;
    while (d !== 0) {
        let _a = d & a, _b = d & b;
        sum |= _a ^ _b ^ carry;
        carry = ((_a & _b) | (_a & carry) | (_b & carry)) << 1;
        d <<= 1;
    }
    sum |= carry;
    return sum;
};
