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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    var depth = 1;
    var a = [root];
    while (a.length) {
        var _a = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (!a[i].left && !a[i].right) {
                return depth;
            }
            a[i].left && _a.push(a[i].left)
            a[i].right && _a.push(a[i].right);
        }
        a = _a;
        depth += 1;
    }
};
