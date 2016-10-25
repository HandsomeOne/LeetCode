/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var n = nums.length;
    var closest = Infinity;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            for (var k = j + 1; k < n; k++) {
                var sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(sum - target) < Math.abs(closest - target)) {
                    closest = sum;
                }
                if (closest === target) {
                    return closest;
                }
            }
        }
    }
    return closest;
};
