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
var postorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    var result = [root];
    for (var i = 0; i < result.length; i++) {
        var j = result.length - 1 - i;
        var node = result[j];
        var children = [];
        node.left && children.push(node.left);
        node.right && children.push(node.right);
        [].splice.apply(result, [j, 1, ...children, node.val]);
    }
    return result;
};
