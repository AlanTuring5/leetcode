// 2022.09.25

// 若链表中的某个节点，既不是链表头节点，也不是链表尾节点，则称其为该链表的「中间节点」。假定已知链表的某一个中间节点，请实现一种算法，将该节点从链表中删除。例如，传入节点 c（位于单向链表 a -> b -> c -> d -> e -> f 中），将其删除后，剩余链表为 a -> b -> d -> e -> f

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next
};

// 删除节点：
// 1、使用node.next做判断，当node.next需要被删除时，node.next = node.next.next
// 2、使用node做判断，当node需要被删除时，将node.next.val复制到node.val，然后删除node.next，即node.next = node.next.next

