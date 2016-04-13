/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var max = nums[0], currentMax = nums[0], currentMin = nums[0];
    for (var i = 1, n = nums.length; i < n; i++) {
        var maxProduct = currentMax * nums[i];
        var minProduct = currentMin * nums[i];
        currentMax = Math.max(maxProduct, minProduct, nums[i]);
        currentMin = Math.min(maxProduct, minProduct, nums[i]);
        max = Math.max(max, currentMax);
    }
    return max;
};
