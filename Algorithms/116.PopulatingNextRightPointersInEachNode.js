/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    root.next = null;
    var levelStart = root;
    while (levelStart.left) {
        var node = levelStart;
        while (node) {
            node.left.next = node.right;
            node.right.next = node.next ? node.next.left : null;
            node = node.next;
        }
        levelStart = levelStart.left;
    }
};
