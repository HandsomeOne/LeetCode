/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0, end = nums.length - 1;
    do {
        var middle = (start + end) >> 1;
        if (nums[start] === target) {
            return start;
        } else if (nums[middle] === target) {
            return middle;
        } else if (nums[end] === target) {
            return end;
        }
        if (nums[start] < nums[end]) {
            if (nums[middle] > target) {
                end = middle;
            } else {
                start = middle;
            }
        } else {
            if (
                (nums[middle] < nums[end] &&
                    (target < nums[middle] || target > nums[start])
                ) || (nums[middle] > nums[end] &&
                    (target < nums[middle] && target > nums[start])
                )
            ) {
                end = middle;
            } else {
                start = middle;
            }
        }
    } while (end - start > 1);
    return -1;
};
