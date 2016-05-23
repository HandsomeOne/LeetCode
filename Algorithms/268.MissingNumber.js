/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var missing = nums.length * (nums.length + 1) / 2;
    nums.forEach(num => {
        missing -= num;
    });
    return missing;
};
