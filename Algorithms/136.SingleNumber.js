/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(function(a, b) {
        return a ^ b;
    });
};
