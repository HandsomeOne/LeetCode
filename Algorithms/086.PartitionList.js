/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var beforeHead = { next: head };
    var insertPosition = beforeHead, prev = beforeHead, node = head;
    while (node) {
        var next = node.next;
        if (node.val < x) {
            if (insertPosition.next !== node) {
                prev.next = next;
                node.next = insertPosition.next;
                insertPosition.next = node;
            }
            insertPosition = node;
        } else {
            prev = node;
        }
        node = next;
    }
    return beforeHead.next;
};
