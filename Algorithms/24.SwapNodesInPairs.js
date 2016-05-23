/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!(head && head.next)) {
        return head;
    }
    var newHead = head.next;
    var current = head, next, prev;
    while (current && current.next) {
        next = current.next;
        if (prev) { prev.next = next; }
        prev = current;
        current.next = next.next;
        next.next = current;
        current = current.next;
    }
    return newHead;
};
