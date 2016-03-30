/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    return nums.some(function(num, i) {
        return num === nums[i + 1];
    })
};
