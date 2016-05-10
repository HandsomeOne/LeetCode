/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    function nextPermutation(nums) {
        function swap(i, j) {
            var t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
        }
        var l = nums.length;
        var last = nums[l - 1];
        for (var i = l - 2; i >= 0; i--) {
            if (nums[i] < last) {
                for (var j = i + 1; j < l - (j - i); j++) {
                    swap(j, l - (j - i));
                }
                for (var j = i + 1; j < l; j++) {
                    if (nums[j] > nums[i]) {
                        swap(i, j);
                        return;
                    }
                }
            }
            last = nums[i];
        }
        nums.reverse();
    }
    var permutations = [];
    do {
        permutations.push(nums);
        nums = nums.slice();
        nextPermutation(nums);
    } while (permutations[0].toString() !== nums.toString());
    return permutations;
};
