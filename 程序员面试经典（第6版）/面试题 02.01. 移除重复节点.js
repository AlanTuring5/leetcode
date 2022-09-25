// 2022.09.25

// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 利用Set/Map存储判断重复节点
var removeDuplicateNodes = function (head) {
    if (!head || !head.next) {
        return head
    }
    let set = new Set()
    let cur = head;
    set.add(head.val);
    while (cur.next) {
        if (!set.has(cur.next.val)) {
            set.add(cur.next.val);
            cur = cur.next;
        } else {
            cur.next = cur.next.next
        }

    }
    return head
};

// 不使用缓冲区→双重循环
var removeDuplicateNodes = function (head) {
    if (!head || !head.next) {
        return head
    }
    let i = head;
    while (i) {
        let j = i;
        while (j.next) {
            if (i.val == j.next.val) {
                j.next = j.next.next;
            } else {
                j = j.next;
            }
        }
        i = i.next
    }
    return head
};

// 1、跳过cur.next：cur.next = cur.next.next