/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var missing = nums.length * (nums.length + 1) / 2;
    nums.forEach(function(num) {
        missing -= num;
    });
    return missing;
};
