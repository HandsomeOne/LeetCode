/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function sortedArrayToBSTByIndex(start, end) {
        if (start > end) {
            return null;
        }
        var middle = (start + end) >> 1;
        var root = new TreeNode(nums[middle]);
        root.left = sortedArrayToBSTByIndex(start, middle - 1);
        root.right = sortedArrayToBSTByIndex(middle + 1, end);
        return root;
    }
    return sortedArrayToBSTByIndex(0, nums.length - 1);
};
