# 递归
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        if not root.left and not root.right:
            return targetSum == root.val
        return self.hasPathSum(root.left,targetSum-root.val) or self.hasPathSum(root.right,targetSum-root.val) 

# 迭代
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False

        queue_node = collections.deque([root])
        queue_val = collections.deque([root.val])
        while queue_node:
            node = queue_node.popleft()
            temp = queue_val.popleft()
            if not node.left and not node.right:
                if targetSum == temp:
                    return True
                continue
            if node.left:
                queue_node.append(node.left)
                queue_val.append(node.left.val+temp)
            if node.right:
                queue_node.append(node.right)
                queue_val.append(node.right.val+temp)
        return False