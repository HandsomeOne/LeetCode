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
var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    var result = [root];
    for (var i = 0; i < result.length; i++) {
        var node = result[i];
        var children = [];
        node.left && children.push(node.left);
        node.right && children.push(node.right);
        [].splice.apply(result, [i, 1, node.val, ...children]);
    }
    return result;
};
