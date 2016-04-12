/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var nodes = [], node = head;
    while (node) {
        nodes.push(node);
        node = node.next;
    }
    if (nodes.length <= 2) {
        return;
    }
    while (nodes.length > 2) {
        var last = nodes.pop();
        nodes.shift().next = last;
        last.next = nodes[0];
    }
    nodes.pop().next = null;
};
