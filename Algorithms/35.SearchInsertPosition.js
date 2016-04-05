/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var l = nums.length;
    for (var i = 0; i < l; i++) {
        if (target <= nums[i]) {
            return i;
        }
    }
    return l;
};
