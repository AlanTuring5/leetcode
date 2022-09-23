// 2022.09.23

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let ans = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        let k = len - 1;
        let target = -nums[i];
        for (let j = i + 1; j < len; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue;
            while (j < k && nums[j] + nums[k] > target) {
                k--;
            }
            if (j == k)
                break;
            if (nums[j] + nums[k] == target)
                ans.push([nums[i], nums[j], nums[k]])
        }
    }
    return ans
};

