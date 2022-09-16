# 1、记录出现的数字，出现两次以上的就删除
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        record = []
        ans = []
        for i in nums:
            if self.findValue(ans,i):
                record.append(i)
            else:
                ans.append(i)
        for i in ans:
            if self.findValue(record,i):
                ans = self.delectValue(ans,i)
        return ans[0]


    def findValue(self,ans,value):
        if len(ans) == 0:
            return False
        for i in ans:
            if i == value:
                return True
        return False
    
    def delectValue(self,ans,value):
        newans = []
        for i in range(len(ans)):
            if ans[i] == value:
                for j in range(0,i):
                    newans.append(ans[j])
                for j in range(i+1,len(ans)):
                    newans.append(ans[j])
                return newans

# 2、哈希表
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        dict = {}
        for i in nums:
            self.count(dict,i)
        return self.findSingle(dict)

    def count(self,dict,key):
        if key in dict:
            dict[key] += 1
        else:
            dict[key] = 1
    
    # 遍历字典
    def findSingle(self,dict):
        for k,v in dict.items():
            if  v == 1:
                return k

# python 自带计数器：collections.Counter()

# 3、位运算
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        counts = [0 for _ in range(32)]
        for i in range(len(nums)):
            for j in range(32):
                counts[j] += nums[i] & 1
                nums[i] >>= 1
        
        res,m = 0, 3
        for i in range(32):
            res <<= 1
            res |= counts[31-i]%m
        return res if counts[31]%m == 0 else ~(res ^ 0xffffffff)