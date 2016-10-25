/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var nodes = [];
    var _head = head;
    while (_head) {
        nodes.push(_head);
        _head = _head.next;
    }
    var l = nodes.length;
    if (n === l) {
        return head.next;
    } else {
        nodes[l - n - 1].next = nodes[l - n].next;
        return head;
    }
};
