/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var a = [root], s = [0];
    while (a.length) {
        var _a = [], _s = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i]) {
                var _sum = a[i].val + s[i >> 1];
                if (_sum === sum && a[i].left === null && a[i].right === null) {
                    return true;
                }
                _a.push(a[i].left, a[i].right);
                _s.push(_sum);
            }
        }
        a = _a;
        s = _s;
    }
    return false;
};
