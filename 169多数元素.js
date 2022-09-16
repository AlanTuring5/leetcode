// 2022.09.16

// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表
var majorityElement = function (nums) {
    let numsMap = new Map()
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (numsMap.has(nums[i])) {
            numsMap.set(nums[i], numsMap.get(nums[i]) + 1)
        } else {
            numsMap.set(nums[i], 1)
        }
    }
    console.log(numsMap)
    for (let i of numsMap.keys()) {
        if (numsMap.get(i) > len / 2) {
            return i
        }
    }
    // for(let i of numsMap.entries()){
    //     if(i[1] > len/2){
    //         return i[0]
    //     }
    // }
};

//排序找众数
var majorityElement = function (nums) {
    nums.sort()
    return nums[Math.floor(nums.length / 2)]
};

//随机找众数
// 执行用时：60 ms, 在所有 JavaScript 提交中击败了88.27 %的用户
// 内存消耗：42.1 MB, 在所有 JavaScript 提交中击败了89.78 %的用户
var majorityElement = function (nums) {
    let numIndex = -1;
    while (1) {
        numIndex = getRndInteger(0, nums.length)
        if (count(nums, nums[numIndex]) > nums.length / 2) {
            break;
        }
    }
    return nums[numIndex]
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function count(arr, num) {
    let numCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            numCount++
        }
    }
    return numCount
}

// Boyer-Moore 投票算法
// 执行用时：64 ms, 在所有 JavaScript 提交中击败了73.16 %的用户
// 内存消耗：42.1 MB, 在所有 JavaScript 提交中击败了90.30 %的用户
var majorityElement = function (nums) {
    let count = 0;
    let candidate = null

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
        }
        count += (nums[i] == candidate ? 1 : -1)
    }
    return candidate
};
