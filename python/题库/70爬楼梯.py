# 递归（超时）
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1 or n == 2:
            return n

        return self.climbStairs(n-1)+self.climbStairs(n-2)

# 动态规划
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1 or n == 2:
            return n

        p = 1
        q = 2
        r = 0
        for i in range(2,n):
            r = p + q
            p = q
            q = r
        return r
