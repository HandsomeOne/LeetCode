/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var quadruplets = [];
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
    for (var i = 0; nums[i] <= target / 4; i++) {
        for (var j = i + (count[nums[i]] < 2),
            jMax = (target - nums[i]) / 3; nums[j] <= jMax; j++) {
            for (var k = j + (count[nums[j]] < 2 + (i === j)),
                kMax = (target - nums[i] - nums[j]) / 2; nums[k] <= kMax; k++) {
                var theLast = target - nums[i] - nums[j] - nums[k];
                if (count[theLast] > (theLast === nums[i]) + (theLast === nums[j]) + (theLast === nums[k])) {
                    quadruplets.push([nums[i], nums[j], nums[k], theLast]);
                }
            }
        }
    }
    return quadruplets;
};
