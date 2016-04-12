/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var l = nums.length;
    var max = 0;
    for (var i = 0; i <= max; i++) {
        max = Math.max(max, nums[i] + i);
        if (max >= l - 1) {
            return true;
        }
    }
    return false;
};
