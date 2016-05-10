/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var permutations = [];
    function permuteTheRest(permuted, nums) {
        if (!nums.length) {
            permutations.push(permuted);
            return;
        }
        for (var i = 0, l = nums.length; i < l; i++) {
            var newNums = nums.slice();
            newNums.splice(i, 1);
            permuteTheRest(permuted.concat([nums[i]]), newNums);
        }
    }
    permuteTheRest([], nums);
    return permutations;
};
