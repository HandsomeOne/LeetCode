/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var node = head;
    var length = 0;
    while (node) {
        length++;
        node = node.next;
    }
    if (length === 0) {
        return head;
    }
    k %= length;
    if (k === 0) {
        return head;
    }
    node = head;
    for (var i = 0; i < length - k - 1; i++) {
        node = node.next;
    }
    var newHead = node.next;
    node.next = null;
    node = newHead;
    while (node.next) {
        node = node.next;
    }
    node.next = head;
    return newHead;
};
