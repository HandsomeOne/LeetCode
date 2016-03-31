/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var triplets = [];
    var count = {};
    nums.forEach(function(num) {
        count[num] = (count[num] || 0) + 1;
    });
    nums = Object.keys(count).map(function(str) {
        return +str;
    }).sort(function(a, b) {
        return a - b;
    });
    var l = nums.length;
    for (var i = 0; nums[i] <= 0; i++) {
        for (var j = i + (count[nums[i]] < 2); nums[j] <= -nums[i] / 2; j++) {
            var theLast = -nums[i] - nums[j];
            if (count[theLast] > (theLast === nums[i]) + (theLast === nums[j])) {
                triplets.push([nums[i], nums[j], theLast]);
            }
        }
    }
    return triplets;
};
