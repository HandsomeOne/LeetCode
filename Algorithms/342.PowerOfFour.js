/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num > 0 && (num & -num) === num && (num & 1431655765) === num;
};
