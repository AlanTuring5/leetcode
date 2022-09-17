// 2022.09.17

// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

/**
 * @param {number} n
 * @return {boolean}
 */

// 约数
var isPowerOfTwo = function (n) {
    const BIG = (1 << 30)
    return n > 0 && BIG % n == 0
};

// n&(n - 1)，2的幂次方的二进制表示中只有一个1
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};