/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var a = [root], paths = [''];
    var locationP, locationQ;
    while (locationP === undefined || locationQ === undefined) {
        var _a = [], _paths = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i]) {
                var path = paths[i];
                if (a[i] === p) {
                    locationP = path;
                }
                if (a[i] === q) {
                    locationQ = path;
                }
                if (locationP !== undefined && locationQ !== undefined) {
                    break;
                }
                _a.push(a[i].left, a[i].right);
                _paths.push(path + '0', path + '1');
            }
        }
        a = _a;
        paths = _paths;
    }
    var result = root;
    while (locationP.length && locationQ.length) {
        if (locationP[0] === locationQ[0]) {
            if (locationP[0] === '0') {
                result = result.left;
            } else {
                result = result.right;
            }
        } else {
            break;
        }
        locationP = locationP.slice(1);
        locationQ = locationQ.slice(1);
    }
    return result;
};
