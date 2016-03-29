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
    if (!root) {
        return root;
    }
    function swap(node) {
        var t=node.left;
        node.left=node.right;
        node.right=t;
    }
    var a = [root];
    while (a.length) {
        var _a = [];
        a.forEach(function(node) {
            swap(node);
            node.left && _a.push(node.left);
            node.right && _a.push(node.right);
        });
        a = _a;
    }
    return root;
};
