// 2022.09.23

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 
var search = function (nums, target) {
    let len = nums.length;
    if (len === 1) {
        return nums[0] == target ? 0 : -1;
    }
    let i = 0,
        j = 0;
    while (i <= (j + len) % len) {
        if (nums[i] == target)
            return i
        if (nums[(j + len) % len] == target)
            return (j + len) % len
        i++;
        j--;
    }
    return -1
};

// 二分法
var search = function (nums, target) {
    let len = nums.length;
    if (len === 1) {
        return nums[0] == target ? 0 : -1;
    }
    let l = 0,
        r = len - 1;
    while (l <= r) {
        let mid = ~~((l + r) / 2);
        if (nums[mid] == target)
            return mid
        // 左边升序
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        // 右边升序
        else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1
};