/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var prev;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === prev) {
            nums.splice(i, 1);
        } else {
            prev = nums[i];
        }
    }
    return nums.length;
};
