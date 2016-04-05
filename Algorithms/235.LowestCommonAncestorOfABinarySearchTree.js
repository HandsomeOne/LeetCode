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
    var a = [root], paths = [0];
    var locationP, locationQ;
    var depth = 0;
    while (!(locationP && locationQ)) {
        var _a = [], _paths = [];
        for (var i = 0, l = a.length; i < l; i++) {
            if (a[i]) {
                var path = paths[i];
                if (a[i] === p) {
                    locationP = [depth, path];
                }
                if (a[i] === q) {
                    locationQ = [depth, path];
                }
                if (locationP && locationQ) {
                    break;
                }
                _a.push(a[i].left, a[i].right);
                _paths.push(path, path + (1 << depth));
            }
        }
        a = _a;
        paths = _paths;
        depth++;
    }
    var result = root;
    var minDepth = Math.min(locationP[0], locationQ[0]);
    while (minDepth) {
        if ((locationP[1] & 1) === (locationQ[1] & 1)) {
            if (locationP[1] & 1) {
                result = result.right;
            } else {
                result = result.left;
            }
        } else {
            break;
        }
        locationP[1] >>= 1;
        locationQ[1] >>= 1;
        minDepth--;
    }
    return result;
};
