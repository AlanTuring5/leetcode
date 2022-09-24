// 2022.09.24

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || head.next == null || k == 0) {
        return head;
    }

    let len = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next
        len++;
    }

    let moveIndex = len - k % len;
    if (moveIndex == len) {
        return head
    }

    cur.next = head;
    while (moveIndex--) {
        cur = cur.next;
    }
    let ret = cur.next;
    cur.next = null;
    return ret;
};