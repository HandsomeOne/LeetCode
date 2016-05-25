/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var min = Infinity;
    for (var num of nums) {
        if (num < min) {
            min = num;
        }
    }
    return min;
};
