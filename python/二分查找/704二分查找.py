from turtle import right
from xml.dom import minidom


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0;
        right = len(nums)-1;
        while left<=right:
            # 浮点数除法/，整数除法//
            middle = (left+right)//2;

            # 数组下标[]: list[i]
            if nums[middle]>target:
                right = middle-1;
            
            elif nums[middle] <target:
                left = middle+1;
            else:
                return middle;
        return -1;

"""
语法：
1、浮点数除法/，整数除法//
2、数组下标[]: list[i]，matlab的数组下标为()
3、循环和条件语句采用：

思路：
1、设置low、middle和high
2、判断middle与目标值的大小
3、将middle的左一位或右一位设置为high或者low
"""

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return nums.index(target) if target in nums else -1;

"""
list用法：https://m.runoob.com/python3/python3-list.html
    list.append()
    list.cout()
    list.index()
    list.insert()
    list.pop()
    list.remove()
    list.copy()
……
"""