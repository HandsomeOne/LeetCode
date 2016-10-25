/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    function _push(root) {
        if (root) {
            _push(root.left);
            result.push(root.val);
            _push(root.right);
        }
    }
    var result = [];
    _push(root);
    return result;
};
