/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var n = nums.length;
    var leftFactor = nums[0], rightFactor = nums[n - 1];
    var result = new Array(n).fill(1);
    for (var i = 0; i < n - 1; i++) {
        result[i + 1] *= leftFactor;
        result[n - i - 2] *= rightFactor;
        leftFactor *= nums[i + 1];
        rightFactor *= nums[n - i - 2];
    }
    return result;
};
