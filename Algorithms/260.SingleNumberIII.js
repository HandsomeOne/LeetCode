/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var xor = 0;
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        xor ^= nums[i];
    }
    var lowBit = xor & (-xor);
    var a = 0, b = 0;
    for (var i = 0; i < l; i++) {
        if (lowBit & nums[i]) {
            a ^= nums[i];
        }
        else {
            b ^= nums[i];
        }
    }
    return [a, b];
};
