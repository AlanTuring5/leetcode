# 二分法
class Solution:
    def mySqrt(self, x: int) -> int:
        left = 0
        right = x
        ans = -1

        while left<=right:
            mid = (left+right)//2
            if mid*mid>x:
                right = mid-1
            else:
                # 注意这里ans要保留上一次的mid值
                ans = mid
                left = mid + 1
        return ans

# 牛顿迭代法
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0

        # 注意要先转化为float类型，最后再转为int类型
        x0,c = float(x),float(x)
        while 1:
            # 迭代方程
            xi = 0.5*(x0+c/x0)
            # 结束条件 xi接近x0
            if abs(xi-x0)<1e-7:
                break
            x0 = xi
        return int(x0)