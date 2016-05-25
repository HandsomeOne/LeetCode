/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var nums = [];
    for (var i = 1; i <= n; i++) {
        nums.push(i);
    }
    var combinations = [];
    function combineTheRest(combined, index) {
        if (combined.length === k) {
            combinations.push(combined);
            return;
        }
        if (index > n) {
            return;
        }
        for (var i = 0; i < n - index; i++) {
            combineTheRest(combined.concat(nums[index + i]), index + i + 1);
        }
    }
    combineTheRest([], 0);
    return combinations;
};
