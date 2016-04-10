/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var red = 0, white = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        switch (nums[i]) {
            case 0:
                nums.splice(i, 1);
                nums.splice(red, 0, 0);
                red += 1;
                white += 1;
                break;
            case 1:
                nums.splice(i, 1);
                nums.splice(white, 0, 1);
                white += 1;
                break;
        }
    }
};
