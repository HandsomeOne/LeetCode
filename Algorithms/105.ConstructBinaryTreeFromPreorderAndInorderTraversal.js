/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function buildTreeByIndex(preStart, preEnd, inStart, inEnd) {
        if (preStart === preEnd) {
            return null;
        }
        var root = new TreeNode(preorder[preStart]);
        var index = inorder.indexOf(preorder[preStart]);
        var offset = index - inStart;
        root.left = buildTreeByIndex(preStart + 1, preStart + offset + 1, inStart, index);
        root.right = buildTreeByIndex(preStart + offset + 1, preEnd, index + 1, inEnd);
        return root;
    }
    return buildTreeByIndex(0, preorder.length, 0, inorder.length);
};
