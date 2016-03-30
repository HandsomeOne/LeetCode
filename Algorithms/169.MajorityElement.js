/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var candidate, count = 0;
    nums.forEach(function(num, i) {
        if (count === 0) {
            candidate = num;
            count += 1;
        } else if (candidate === num) {
            count += 1;
        } else {
            count -= 1;
        }
    });
    return candidate;
};
