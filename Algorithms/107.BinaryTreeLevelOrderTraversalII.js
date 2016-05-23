/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    var a = [root], result = [];
    while (a.length) {
        result.unshift(a.map(node =>  node.val));
        var _a = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i].left) { _a.push(a[i].left); }
            if (a[i].right) { _a.push(a[i].right); }
        }
        a = _a;
    }
    return result;
};
