# 递归
class Solution:
    def fib(self, n: int) -> int:
        if n==0 or n==1:
            return n
        else:
            return Solution.fib(self,n-1)+Solution.fib(self,n-2)

# 动态规划
class Solution:
    def fib(self, n: int) -> int:
        if n<2:
            return n
        else:
            p = 0
            q = 0
            r = 1
            # range(5,9) = 5,6,7,8 → for(i=5,i<9,i++)
            for i in range(2,n+1):
                p = q
                q = r
                r = p + q
            return r