// 2022.09.25

// 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

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
 * @return {number}
 */
var kthToLast = function (head, k) {
    if (!head || !head.next || k == 0) {
        return head.val
    }
    let cur = head;
    let num = 1;
    while (cur.next) {
        cur = cur.next
        num++;
    }
    cur = head;
    while ((num - k) % num--) {
        cur = cur.next
    }
    return cur.val;
};

// 快慢指针：一开始快慢指针都处于链表起点。之后快指针先出发，走k步后，快慢指针再一起走，当快指针走到末尾时，此时的慢指针即为倒数第K个元素
var kthToLast = function (head, k) {
    if (!head || !head.next || k == 0) {
        return head.val
    }
    let fast = head;
    let slow = head;
    while (--k) {
        fast = fast.next
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next
    }
    return slow.val;
};