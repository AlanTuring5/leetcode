class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def count(root):
            if not root:
                return 0
            else:
                return max(count(root.left),count(root.right))+1
        
        if not root:
            return True
        return abs(count(root.left)-count(root.right))<=1 and self.isBalanced(root.left) and self.isBalanced(root.right)