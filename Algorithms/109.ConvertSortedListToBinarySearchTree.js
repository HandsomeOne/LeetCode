/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    function sortedArrayToBSTByIndex(start, end) {
        if (start > end) {
            return null;
        }
        var middle = (start + end) >> 1;
        var root = new TreeNode(nums[middle]);
        root.left = sortedArrayToBSTByIndex(start, middle - 1);
        root.right = sortedArrayToBSTByIndex(middle + 1, end);
        return root;
    }
    return sortedArrayToBSTByIndex(0, nums.length - 1);
};
