# 排序后查看相邻元素是否相同
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        nums.sort()
        if n ==1:
            return False
        for i in range(n-1):
            if nums[i] == nums[i+1]:
                return True
        return False

# 哈希表，在python中为字典
# 速度快，内存大
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        map = dict()
        for i in range(0,n):
            if nums[i] in map:
                return True
            # 将每个值传入相同的索引值中
            map[nums[i]] = nums[i]
        return False