# 合并成同一个数组，再进行排序
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for i in range(m,m+n):
            nums1[i] = nums2[i-m]
        nums1.sort()

# 双指针
# ①初始化数组[]，再使用while/for循环，每次list.append()
# ②初始化固定大小数组[None for _ in range(len)]，使用for循环，list[i]赋值
# 如果没有预先设置数组大小，只能使用list.append()，如果使用下标索引会报错
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        ans = []
        i = 0
        j = 0
        while i<m or j<n:
            if i == m:
                ans.append(nums2[j])
                j = j + 1
            elif j == n:
                ans.append(nums1[i])
                i = i + 1
            elif nums1[i]< nums2[j]:
                ans.append(nums1[i])
                i = i + 1
            else:
                ans.append(nums2[j])
                j = j + 1
        nums1[:] = ans

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # ans = []会报错，提示超出索引
        ans = [None for _ in range(n+m)]
        i = 0
        j = 0
        for k in range(0,m+n):
            if i == m:
                ans[k] = nums2[j]
                j = j + 1
            elif j == n:
                ans[k] = nums1[i]
                i = i + 1
            elif nums1[i]<= nums2[j]:
                ans[k] = nums1[i]
                i = i + 1
            else:
                ans[k] = nums2[j]
                j = j + 1
        nums1[:] = ans

# 逆指针