/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
    var end = head;
    while (end.next) {
        end.next.prev = end;
        end = end.next;
    }
    while (head !== end) {
        if (head.val !== end.val) {
            return false;
        }
        if (head.next === end) {
            break;
        }
        head = head.next;
        end = end.prev;
    }
    return true;
};
