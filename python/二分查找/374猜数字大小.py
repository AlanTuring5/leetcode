from xml.dom import minidom


class Solution:
    def guessNumber(self, n: int) -> int:
        low = 0
        high = n
        if n == 1:
            return 1
        else:
            while high>=low:
                middle = (low+high)//2
                if guess(middle) ==1:
                    low = middle+1
                elif guess(middle) == -1:
                    high = middle-1
                else:
                    return middle
