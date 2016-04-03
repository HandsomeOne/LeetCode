/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (!nums.length) {
        return [];
    }
    var ranges = [];
    var start = nums[0], end = nums[0];
    for (var i = 1, l = nums.length; i <= l; i++) {
        if (i === l || nums[i] - nums[i - 1] !== 1) {
            ranges.push(start === end ? '' + start : start + '->' + end);
            start = nums[i];
        }
        end = nums[i];
    }
    return ranges;
};
