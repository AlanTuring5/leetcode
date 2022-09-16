# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        # 判断链表是否为空，空链表不能使用.val和.next，会报错
        if not head:
            return head  
        pre,cur = head,head
        while cur.next:
            cur = cur.next
            if cur.val != pre.val:
                pre.next = cur
                pre = cur
            if not cur.next and pre.val == cur.val:
                pre.next = None
        return head

# 简洁
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head:
            return head
            
        cur = head
        while cur.next:
            if cur.val == cur.next.val:
                cur.next = cur.next.next
            else:
                cur = cur.next    
        return head