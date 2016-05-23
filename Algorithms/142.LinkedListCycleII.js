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
var detectCycle = function(head) {
    var fast = head, slow = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            var start = head;
            while (slow !== start) {
                slow = slow.next;
                start = start.next;
            }
            return slow;
        }
    }
    return null;
};
