/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var a = [root], paths = [''], result = [];
    while (a.length) {
        var _a = [], _paths = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i]) {
                var path;
                if (paths[i / 2 | 0] === '') {
                    path = '' + a[i].val;
                } else {
                    path = paths[i / 2 | 0] + '->' + a[i].val;
                }
                if (a[i].left === null && a[i].right === null) {
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
