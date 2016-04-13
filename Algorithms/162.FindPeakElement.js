/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    function isPeak(i) {
        return nums[i] > nums[i - 1] && nums[i] > nums[i + 1];
    }
    var l = nums.length;
    nums[-1] = nums[l] = -Infinity;
    var start = 0, end = l - 1;
    do {
        if (isPeak(start)) {
            return start;
        }
        if (isPeak(end)) {
            return end;
        }
        var middle = (start + end) >> 1;
        if (isPeak(middle)) {
            return middle;
        }
        if (nums[middle] < nums[middle - 1]) {
            end = middle;
        } else {
            start = middle;
        }
    } while (end - start >= 2);
};
