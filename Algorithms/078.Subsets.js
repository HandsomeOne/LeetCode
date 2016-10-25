/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort((a, b) => a - b);
    var result = [];
    var l = nums.length, n = 1 << l;
    while (n > 0) {
        n--;
        var m = n;
        var subset = [];
        for (var i = 0; i < l; i++) {
            if (m & 1) {
                subset.push(nums[i]);
            }
            m >>= 1;
        }
        result.push(subset);
    }
    return result;
};
