# 反向遍历，判断取余大小

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)

        i = n - 1
        j = 1    
        while i >= 0:
            temp = digits[i] + j
            digits[i] = temp % 10
            if temp//10:
                j = 1
            else:
                j = 0
            i -= 1

        # 判断第一位是否大于10
        if j == 1:
            newdigits = [None for _ in range(0,n+1)]
            newdigits[0] = 1
            for i in range(0,n):
                newdigits[i+1] = digits[i]
            return newdigits

        # if digits[0]>=10:  # 对最高位稍做处理，如解题思路中的[9,9,9]
            # digits=[1]+digits
            # digits[1]%=digits[1]
            
        return digits


