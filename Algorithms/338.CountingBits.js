/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var bits = [0];
    for (var i = 1; i <= num; i++) {
        bits.push(bits[parseInt('0' + i.toString(2).slice(1), 2)] + 1);
    }
    return bits;
};
