/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function swap(node) {
        var t = node.left;
        node.left = node.right;
        node.right = t;
    }
    function push(node) {
        if (node) {
            swap(node);
            _a.push(node.left, node.right);
        }
    }
    var a = [root];
    while (a.length) {
        var _a = [];
        a.forEach(push);
        a = _a;
    }
    return root;
};
