// 2022.09.16

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

//哈希
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const hashMap = new Set()
    let p = headA
    while (p) {
        if (!hashMap.has(p)) {
            hashMap.add(p)
        }
        p = p.next
    }
    p = headB
    while (p) {
        if (hashMap.has(p)) {
            return p
        }
        p = p.next
    }
    return null
};

//双指针
var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null)
        return null
    let pa = headA
    let pb = headB
    while (pa != pb) {
        pa = pa == null ? headB : pa.next
        pb = pb == null ? headA : pb.next
    }
    return pa
};