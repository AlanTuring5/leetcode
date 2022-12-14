// 2022.09.15

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值target的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 执行用时：60 ms, 在所有 JavaScript 提交中击败了92.71%的用户
// 内存消耗：42.4 MB, 在所有 JavaScript 提交中击败了25.31%的用户

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [i, map.get(nums[i])]
        }
        map.set(target - nums[i], i);
    }
};

// 1、Map的使用
