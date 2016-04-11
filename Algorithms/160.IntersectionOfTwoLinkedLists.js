/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    var nodeA = headA;
    while (nodeA) {
        nodeA.marked = true;
        nodeA = nodeA.next;
    }
    var nodeB = headB;
    while (nodeB) {
        if (nodeB.marked) {
            break;
        }
        nodeB = nodeB.next;
    }
    return nodeB;
};
