// 2022.09.23

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。

/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var maxArea = function (height) {
    let area = 0;
    let len = height.length - 1;
    let l = 0,
        r = len;
    while (l < r) {
        area = Math.max(area, Math.min(height[l], height[r]) * len)
        height[l] <= height[r] ? l++ : r--;
        len--;
    }
    return area
};
