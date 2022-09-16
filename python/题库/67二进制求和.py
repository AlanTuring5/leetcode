# 方法一：变为同长，再相加
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        na = len(a)
        nb = len(b)
        if nb > na:
            return self.addBinary(b,a)

        newa = [0 for _ in range(na)]
        newb = [0 for _ in range(na)]
        for k in range(na-nb,na):
            newb[k] = int(b[k-na+nb])
        for k in range(0,na):
            newa[k] = int(a[k])

        i = na - 1
        j = 0
        while i >= 0:
            temp = newa[i] + newb[i] + j
            newa[i] = temp % 2
            if temp // 2:
                j = 1
            else:
                j = 0
            i -= 1
        
        if j:
            newa[0] = newa[0] % 2
            newa = [1] + newa

        ans = ''
        for i in range(0,len(newa)):
            ans = ans+str(newa[i])
        return ans

# 'str' object does not support item assignment：字符串是不可变对象，不能用下标赋值的方式去改变字符串。
# 改变字符串需要将字符串修改为list，再反转回去

# 方法二：二进制转十进制相加，再转为二进制
# python 格式化字符串的函数 str.format()
# Python代码可将不同的数字系统(二进制，八进制和十六进制)转换为整数值(十进制)：int(a,2)，int(a,8)

# 位运算
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        x,y = int(a,2),int(b,2)
        while y:
            answer = x^y
            carry = (x&y)<<1
            x,y=answer,carry
        return bin(x)[2:]
# x^y : 相加不进位
# (x&y)<<1 : 相加进位的值
# bin(x)：返回整型或长整型的二进制表示（返回值为字符串），前面带有'0b'，需要切掉