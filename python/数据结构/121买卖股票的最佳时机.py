class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        low = prices[0]
        i = 1
        profit = 0
        record = 0
        while i<n:
            if prices[i] <= low:
                low = prices[i]
            else:
                profit = prices[i] - low
            record = max(record,profit)
            i += 1
        return record