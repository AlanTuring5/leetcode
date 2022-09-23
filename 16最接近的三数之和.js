// 2022.09.23

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在恰好一个解

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    const len = nums.length;
    // 数组长度为3直接将和返回
    if (len === 3)
        return nums[0] + nums[1] + nums[2];
    let ans = 0;
    let best = Math.pow(10, 7)
    // 数组从小到大进行排序
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        // 找到下一个不同的数
        if (i > 0 && nums[i] == nums[i - 1])
            continue;
        let j = i + 1,
            k = len - 1;
        while (j < k) {
            ans = nums[i] + nums[j] + nums[k];
            // 如果等于，直接返回
            if (ans == target)
                return target;
            best = update(ans, best, target);
            // 如果大于
            if (ans > target) {
                // 找到下一个不同的数
                let k0 = k - 1;
                while (j < k0 && nums[k0] == nums[k])
                    k0--;
                k = k0;
            }
            // 如果小于
            else {
                // 找到下一个不同的数
                let j0 = j + 1;
                while (j0 < k && nums[j0] == nums[j])
                    j0++;
                j = j0;
            }
        }
    }
    return best
};

function update(cur, best, target) {
    if (Math.abs(best - target) > Math.abs(cur - target))
        best = cur;
    return best
}