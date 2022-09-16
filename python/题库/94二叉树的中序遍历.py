#https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/by-forestsking-95fk/
# 递归中序
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        def Traversal(subroot, order):
            if not subroot:
                return
            Traversal(subroot.left, order)
            order.append(subroot.val)
            Traversal(subroot.right, order)

        order = []
        Traversal(root, order)
        return order

# 迭代中序
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        stack = []
        ret = []
        stack.append((0, root))
        
        while len(stack) != 0:
            op, node = stack.pop()
            if node is None:
                continue
            if op == 1:
                ret.append(node.val)
            else:
                stack.append((0, node.right))
                stack.append((1, node))
                stack.append((0, node.left))
        return ret

# 前序：根→左→右
# 中序：左→根→右
# 后序：左→右→根

