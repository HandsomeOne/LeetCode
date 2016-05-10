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
    function combineTheRest(combined, nums) {
        if (combined.length === k) {
            combinations.push(combined);
            return;
        }
        if (!nums.length) {
            return;
        }
        for (var i = 0, l = nums.length; i < l; i++) {
            var newNums = nums.slice();
            newNums.splice(0, i + 1);
            combineTheRest(combined.concat([nums[i]]), newNums);
        }
    }
    combineTheRest([], nums);
    return combinations;
};
