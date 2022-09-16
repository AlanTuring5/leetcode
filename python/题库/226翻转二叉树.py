# 递归
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        return self.convert(root)

    def convert(self,root):
        if not root:
            return None
        if not root.left and not root.right:
            return root
        root.left,root.right = self.convert(root.right),self.convert(root.left)
        return root
    
# 迭代
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        if not root.left and not root.right:
            return root

        queue_node = collections.deque([root])
        while queue_node:
            node = queue_node.popleft()
            node.left,node.right = node.right,node.left 
            if node.left:
                queue_node.append(node.left)
            if node.right:
                queue_node.append(node.right)
        return root