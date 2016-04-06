/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Infinity, currentMax = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        if (currentMax > 0) {
            currentMax += nums[i];
        } else {
            currentMax = nums[i];
        }
        if (currentMax > max) {
            max = currentMax;
        }
    }
    return max;
};
