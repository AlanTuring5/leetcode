class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        low = 0;
        high = len(nums)-1;

        if target>nums[high]:
            return high+1;
        elif target<nums[low]:
            return 0;
        else:
            while high>=low:
                middle = (low+high)//2;
                if target>nums[middle]:
                    low = middle+1;
                elif  target<nums[middle]:
                    high = middle-1;
                else:
                    return middle;
        return low;