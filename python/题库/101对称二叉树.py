# 深度优先搜索：递归
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        return self.panduan(root.left,root.right)

    def panduan(self,left,right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        if left.val != right.val:
            return False
        return self.panduan(left.left,right.right) and self.panduan(left.right,right.left)

# 广度优先搜索：迭代
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root.left and not root.right:
            return True
        if not root.left or not root.right:
            return False

        queue1 = collections.deque([root.left])
        queue2 = collections.deque([root.right])
        while queue1 and queue2:
            node1 = queue1.popleft()
            node2 = queue2.popleft()
            if node1.val != node2.val:
                return False
            left1,right1 = node1.left,node1.right
            left2,right2 = node2.left,node2.right
            if (not left1)^(not right2):
                return False
            if (not right1)^(not left2):
                return False
            if left1:
                queue1.append(left1)
            if right1:
                queue1.append(right1)
            if right2:
                queue2.append(right2)
            if left2:
                queue2.append(left2)           
        return not queue1 and not queue2