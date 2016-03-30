/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) { 
    var depth = -1;
    var a = [root];
    while (a.length) {
        var _a = [];
        a.forEach(function(node) {
            node && _a.push(node.left, node.right);
        });
        a = _a;
        depth += 1;
    }
    return depth;
};
