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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    let a = [root], result = [];
    let even = false;
    while (a.length) {
        let t = a.map(node => node.val);
        if (even) {
            t.reverse();
        }
        result.push(t);
        let _a = [];
        for (let i = 0, l = a.length; i < l; i++) {
            if (a[i].left) { _a.push(a[i].left); }
            if (a[i].right) { _a.push(a[i].right); }
        }
        a = _a;
        even = !even;
    }
    return result;
};
