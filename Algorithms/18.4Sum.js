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
    for (var i = 0; i < l; i++) {
        for (var j = i + (count[nums[i]] < 2); j < l; j++) {
            for (var k = j + (count[nums[j]] < 3); k < l; k++) {
                for (var m = k + (count[nums[k]] < 4); m < l; m++) {
                    if (nums[i] + nums[j] + nums[k] + nums[m] === target) {
                        quadruplets.push([nums[i], nums[j], nums[k], nums[m]]);
                    }
                }
            }
        }
    }
    return quadruplets;
};
fourSum([-494, -474, -425, -424, -391, -371, -365, -351, -345, -304, -292, -289, -283, -256, -236, -236, -236, -226, -225, -223, -217, -185, -174, -163, -157, -148, -145, -130, -103, -84, -71, -67, -55, -16, -13, -11, 1, 19, 28, 28, 43, 48, 49, 53, 78, 79, 91, 99, 115, 122, 132, 154, 176, 180, 185, 185, 206, 207, 272, 274, 316, 321, 327, 327, 346, 380, 386, 391, 400, 404, 424, 432, 440, 463, 465, 466, 475, 486, 492], -1211);