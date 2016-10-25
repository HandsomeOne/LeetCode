/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var nums = [1, 1];
    for (var i = 2; i <= n; i++) {
        var num = 0;
        for (var j = 0; j < i; j++) {
            num += nums[j] * nums[i - 1 - j];
        }
        nums.push(num);
    }
    return nums[n];
};
