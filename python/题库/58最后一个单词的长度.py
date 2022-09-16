# 反向遍历

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s)
        i = n - 1
        flag = False
        count = 0
        while i >= 0:
            if s[i] == ' ':
                if flag == True:
                    return  count
            else:
                flag = True
                count += 1
            i -= 1
        return count

# 判断是否为空 isspace()
# 去除前后空格,去掉字符串两端的指定字符 strip()