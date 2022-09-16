# 位运算
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        res = 0
        for i in range(0,len(nums)):
            res ^= nums[i]
        return res