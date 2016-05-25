/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    for (var num of nums) {
        if (num === target) {
            return true;
        }
    }
    return false;
};
