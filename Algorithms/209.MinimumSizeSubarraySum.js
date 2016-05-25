/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    var start = 0, end = 0;
    var sum = 0;
    var min = Infinity;
    while (true) {
        while (sum < s) {
            if (end === nums.length) {
                return min === Infinity ? 0 : min;
            }
            end++;
            sum += nums[end - 1];
        }
        min = Math.min(min, end - start);

        sum -= nums[start];
        start++;
    }
};
