class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        low = 0;
        high = n - 1;

        while high>low:
            middle = (low+high)//2;
            if not isBadVersion(middle):
                low = middle+1;
            elif isBadVersion(middle):
                high = middle;
        return high;
                