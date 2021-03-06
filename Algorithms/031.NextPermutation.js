/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    function swap(i, j) {
        var t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    var l = nums.length;
    var last = nums[l - 1];
    for (var i = l - 2; i >= 0; i--) {
        if (nums[i] < last) {
            for (var j = i + 1; j < l - (j - i); j++) {
                swap(j, l - (j - i));
            }
            for (var k = i + 1; k < l; k++) {
                if (nums[k] > nums[i]) {
                    swap(i, k);
                    return;
                }
            }
        }
        last = nums[i];
    }
    nums.reverse();
};
