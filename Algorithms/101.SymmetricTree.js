/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var a = [root];
    while (a.length) {
        var _a = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (i < (l / 2 | 0) && (a[i] || a[l - i - 1])) {
                if ((a[i] && a[i].val) !== (a[l - i - 1] && a[l - i - 1].val)) {
                    return false;
                }
            }
            a[i] && _a.push(a[i].left, a[i].right);
        }
        a = _a;
    }
    return true;
};
