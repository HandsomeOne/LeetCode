/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var xor = 0;
    nums.forEach(num => {
        xor ^= num;
    });
    var lowBit = xor & (-xor);
    var a = 0, b = 0;
    nums.forEach(num => {
        if (lowBit & num) {
            a ^= num;
        }
        else {
            b ^= num;
        }
    });
    return [a, b];
};
