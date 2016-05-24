/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] >= target) {
        return 0;
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    var start = 0, end = nums.length - 1;
    do {
        if (nums[start] === target) {
            return start;
        }
        if (nums[end] === target) {
            return end;
        }
        var middle = (start + end) >> 1;
        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] > target) {
            end = middle;
        } else {
            start = middle;
        }
    } while (end - start >= 2);
    return end;
};
