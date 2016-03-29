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
    if (!root) {
        return 0;
    }
    var depth = 0;
    var a = [root];
    while (a.length) {
        var _a = [];
        a.forEach(function(node) {
            node.left && _a.push(node.left);
            node.right && _a.push(node.right);
        });
        a = _a;
        depth += 1;
    }
    return depth;
};
