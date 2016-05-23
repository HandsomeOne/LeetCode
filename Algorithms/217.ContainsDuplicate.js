/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    return nums.some((num, i) => num === nums[i + 1]);
};
