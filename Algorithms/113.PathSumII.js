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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var a = [root], paths = [[]], result = [];
    paths[0].sum = 0;
    while (a.length) {
        var _a = [], _paths = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i]) {
                var path = paths[i >> 1].slice();
                path.push(a[i].val);
                path.sum = a[i].val + paths[i >> 1].sum;
                if (path.sum === sum && a[i].left === null && a[i].right === null) {
                    result.push(path);
                }
                _a.push(a[i].left, a[i].right);
                _paths.push(path);
            }
        }
        a = _a;
        paths = _paths;
    }
    return result;
};
