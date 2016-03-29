/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (var i = 0, j = 0, l = nums.length; i < l; i++ , j++) {
        if (nums[j] === 0) {
            nums.splice(j, 1);
            nums.push(0);
            j--;
        }
    }
};
