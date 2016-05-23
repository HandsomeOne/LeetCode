/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var node = head;
    var prev;
    while (node) {
        if (node.val === val) {
            if (!node.next) {
                if (prev) {
                    prev.next = null;
                } else {
                    head = null;
                }
                break;
            } else {
                node.val = node.next.val;
                node.next = node.next.next;
            }
        } else {
            prev = node;
            node = node.next;
        }
    }
    return head;
};
