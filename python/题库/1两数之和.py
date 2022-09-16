# 哈希表
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        if n==2:
            return [0,1]
        else:
            map = dict()
            for i in range(0,n):
                if nums[i] in map:
                    return [map[nums[i]],i]
                map[target-nums[i]]=i