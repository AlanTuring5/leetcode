# 执行用时：44 ms, 在所有 Python3 提交中击败了40.84%的用户
# 内存消耗：14.9 MB, 在所有 Python3 提交中击败了96.09%的用户
# 先排序，再双指针
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        i = 0
        j = 0
        ans = []
        while i<len(nums1) and j<len(nums2):
            if nums1[i]<nums2[j]:
                i = i + 1
            elif nums1[i]>nums2[j]:
                j = j + 1
            else:
                ans.append(nums1[i])
                i = i + 1
                j = j + 1
        return ans

# 执行用时：32 ms, 在所有 Python3 提交中击败了92.89%的用户
# 内存消耗：15.1 MB, 在所有 Python3 提交中击败了55.02%的用户
# 哈希表
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        map = dict()
        ans = list()

        for i in nums1:
            if i in map:
                map[i] += 1
            else:
                map[i] = 1
        
        for j in nums2:
            if j in map and map[j]>0:
                ans.append(j)
                map[j] -= 1
        return ans