/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var beforeStart = null, start = head;
    var _m = m;
    while (_m > 1) {
        beforeStart = start;
        start = start.next;
        _m--;
    }
    var next = start.next, nextNext;
    while (n > m) {
        nextNext = next.next;
        next.next = start;
        start = next;
        next = nextNext;
        n--;
    }
    if (beforeStart) {
        beforeStart.next.next = next;
        beforeStart.next = start;
        return head;
    } else {
        head.next = next;
        return start;
    }
};
