/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    function height(root) {
        if (!root) {
            return 0;
        }
        var left = height(root.left), right = height(root.right);
        if (Math.abs(left - right) > 1) {
            throw new Error();
        }
        return Math.max(left, right) + 1;
    }
    try {
        height(root);
        return true;
    } catch (err) {
        return false;
    }
};
