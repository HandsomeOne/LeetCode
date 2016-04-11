/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    this.sums = [];
    this.sums[-1] = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i > j) {
        return 0;
    }
    return this.sums[j] - this.sums[i - 1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
