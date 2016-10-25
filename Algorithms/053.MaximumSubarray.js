/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0], currentMax = nums[0];
    for (var i = 1, n = nums.length; i < n; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(max, currentMax);
    }
    return max;
};
