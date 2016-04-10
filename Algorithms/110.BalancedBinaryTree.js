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
var isBalanced = function(root) {
    function _isBalanced(root) {
        if (!root) {
            return 1;
        }
        var left = _isBalanced(root.left), right = _isBalanced(root.right);
        if (!left || !right) {
            return false;
        }
        return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : false;
    }
    return !!_isBalanced(root);
};
