# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 取中间作为根节点
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def sort(left,right):
            if left>right:
                return None
            
            mid = (left+right)//2
            root = TreeNode(nums[mid])
            root.left = sort(left,mid-1)
            root.right = sort(mid+1,right)
            return root
        return sort(0,len(nums)-1)