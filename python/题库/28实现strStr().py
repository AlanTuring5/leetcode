# 暴力实现 BF Brute Force
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0
        if len(needle)>len(haystack):
            return -1
            
        for i in range(0,len(haystack)-len(needle)+1):
            j = 0
            while j<len(needle):
                if not haystack[i+j] == needle[j]:
                    break
                j += 1
            if j == len(needle):
                return i
        return -1

    # KMP算法
    