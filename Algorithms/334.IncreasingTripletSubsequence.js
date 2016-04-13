/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var low = Infinity, mid = Infinity;
    for (var i = 0, l = nums.length; i < l; i++) {
        if (nums[i] > mid) {
            return true;
        }
        if (nums[i] > low) {
            mid = Math.min(mid, nums[i]);
        } else {
            low = nums[i];
        }
    }
    return false;
};
