/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {};
    for (var i = 0, l = nums.length; i < l; i++) {
        if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};
