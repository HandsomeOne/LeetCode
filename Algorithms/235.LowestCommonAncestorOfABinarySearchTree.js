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
    var locationP = root, locationQ = root, result = root;
    while (locationP === locationQ) {
        result = locationP;
        if (p.val !== locationP.val) {
            locationP = p.val < locationP.val ? locationP.left : locationP.right;
        }
        if (q.val !== locationQ.val) {
            locationQ = q.val < locationQ.val ? locationQ.left : locationQ.right;
        }
    }
    return result;
};
