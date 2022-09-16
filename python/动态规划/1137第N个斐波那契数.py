# 动态规划
class Solution:
    def tribonacci(self, n: int) -> int:
        if n<2:
            return n
        elif n==2:
            return 1
        else:
            p = 0
            q = 0
            r = 1
            s = 1
            # range(5,9) = 5,6,7,8 → for(i=5,i<9,i++)
            for i in range(3,n+1):
                p = q
                q = r
                r = s
                s = p + q + r
            return s

# 递归（超时）
class Solution:
    def tribonacci(self, n: int) -> int:
        if n==0 or n==1:
            return n
        elif n==2:
            return 1
        else:
            return Solution.tribonacci(self,n-1)+Solution.tribonacci(self,n-2)+Solution.tribonacci(self,n-3)