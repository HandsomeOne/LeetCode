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
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    var a = [root], result = [];
    while (a.length) {
        result.push(a[a.length - 1].val);
        var _a = [];
        for (var i = 0, l = a.length; i < l; i++) {
            a[i].left && _a.push(a[i].left);
            a[i].right && _a.push(a[i].right);
        }
        a = _a;
    }
    return result;
};
