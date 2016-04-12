/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function buildTreeByIndex(inStart, inEnd, postStart, postEnd) {
        if (postStart === postEnd) {
            return null;
        }
        var root = new TreeNode(postorder[postEnd - 1]);
        var index = inorder.indexOf(postorder[postEnd - 1]);
        var offset = index - inStart;
        root.left = buildTreeByIndex(inStart, index, postStart, postStart + offset);
        root.right = buildTreeByIndex(index + 1, inEnd, postStart + offset, postEnd - 1);
        return root;
    }
    return buildTreeByIndex(0, inorder.length, 0, postorder.length);
};
