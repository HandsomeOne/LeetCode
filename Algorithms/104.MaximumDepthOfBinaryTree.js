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
        a.forEach(push);
        a = _a;
        depth += 1;
    }
    return depth;
    function push(node) {
        if (node) { _a.push(node.left, node.right); }
    }
};
