/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var list = [];
    var nodes = [];
    while (root) {
        nodes.push(root);
        root = root.left;
        while (!root) {
            root = nodes.pop();
            if (list.push(root.val) === k) {
                return root.val;
            }
            root = root.right;
        }
    }
};
