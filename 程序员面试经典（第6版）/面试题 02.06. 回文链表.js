// 2022.09.25

// 编写一个函数，检查输入的链表是否是回文的。

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

// 存储为数组，双指针判断，时间复杂度O(n),空间复杂度O(n)
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true
    }
    let cur = head;
    let valArray = [];
    while (cur) {
        valArray.push(cur.val);
        cur = cur.next;
    }
    const len = valArray.length;
    for (let i = 0; i < ~~(len / 2); i++) {
        if (valArray[i] !== valArray[len - 1 - i]) {
            return false
        }
    }
    return true
};

// 反转后半部分链表，空间复杂度O(1)
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true
    }
    // 计算链表长度
    let len = 1;
    let cur = head.next;
    while (cur) {
        len++;
        cur = cur.next;
    }
    // 找到反转点
    cur = head;
    let changeIndex = ~~(len / 2)
    while (changeIndex--) {
        cur = cur.next;
    }
    // 反转
    let pre = null;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 比较
    while (pre) {
        if (pre.val !== head.val) {
            return false
        }
        pre = pre.next
        head = head.next
    }
    return true
};

