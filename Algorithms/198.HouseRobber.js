/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var robbedPrev = 0;
    var didNotRobPrev = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        var didNotRobCurrent = Math.max(robbedPrev, didNotRobPrev);
        var robbedCurrent = didNotRobPrev + nums[i];
        didNotRobPrev = didNotRobCurrent;
        robbedPrev = robbedCurrent;
    }
    return Math.max(robbedPrev, didNotRobPrev);
};
