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
var oddEvenList = function(head) {
    if (!head) {
        return head;
    }
    var insertPosition = head, even = head.next;
    while (even && even.next) {
        var odd = even.next;
        even.next = odd.next;
        odd.next = insertPosition.next;
        insertPosition.next = odd;
        insertPosition = odd;
        even = even.next;
    }
    return head;
};
