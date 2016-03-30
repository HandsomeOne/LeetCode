/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var a1 = [p], a2 = [q];
    while (a1.length || a2.length) {
        var _a1 = [], _a2 = [];
        for (var i = 0, l = Math.max(a1.length, a2.length); i < l; i++) {
            a1[i] && _a1.push(a1[i].left, a1[i].right);
            a2[i] && _a2.push(a2[i].left, a2[i].right);
            if (!a1[i] && !a2[i]) {
                continue;
            } else if (!a1[i] ^ !a2[i] || a1[i].val !== a2[i].val) {
                return false;
            }
        }
        a1 = _a1, a2 = _a2;
    }
    return true;
};
