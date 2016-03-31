/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = Math.sign(x) * Math.abs(x).toString().split('').reverse().join('');
    var overflow = Math.pow(2, 31);
    return (x >= overflow || -x > overflow) ? 0 : x;
};
