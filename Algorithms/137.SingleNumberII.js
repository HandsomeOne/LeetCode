/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var num = 0;
    var l = nums.length;
    for (var i = 0; i < 32; i++) {
        var s = 0;
        for (var j = 0; j < l; j++) {
            s += ((nums[j] >> i) & 1);
        }
        s %= 3;
        num += (s << i);
    }
    return num;
};
