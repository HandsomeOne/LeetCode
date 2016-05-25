/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0, end = nums.length - 1;
    if (nums[start] <= nums[end]) {
        return nums[start];
    }
    while (end - start > 1) {
        var middle = (start + end)>>1;
        if (nums[middle] < nums[start]) {
            end = middle;
        } else {
            start = middle;
        }
    }
    return nums[end];
};
