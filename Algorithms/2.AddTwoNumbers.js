/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function carrying(sum) {
        carry = sum > 9 ? 1 : 0;
        return sum % 10;
    }
    var carry;
    var l = new ListNode(carrying(l1.val + l2.val));
    var p = l;
    while ((l1 && l1.next) || (l2 && l2.next) || carry) {
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        var digit = carrying((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry);
        p.next = new ListNode(digit);
        p = p.next;
    }
    return l;
};
