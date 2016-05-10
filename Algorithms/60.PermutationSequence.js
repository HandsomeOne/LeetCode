/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var permutation = '';
    var nums = [], base = 1;
    for (var i = 1; i <= n; i++) {
        nums.push(i);
        base *= i;
    }
    while (n >= 1) {
        base /= n;
        var index = (k - 1) / base | 0;
        permutation += nums[index];
        nums.splice(index, 1);
        k = (k - 1) % base + 1;
        n--;
    }
    return permutation;
};
