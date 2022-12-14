// 2022.09.22

// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。如果反转后整数超过 32 位的有符号整数的范围[−231, 231 − 1] ，就返回 0。假设环境不允许存储 64 位整数（有符号或无符号）。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    while (x) {
        let digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1)
            return 0;
    }
    return rev;
};

// 1、~~：取整（向下取整）
// 2、Math.pow(x, y)：返回 x 的 y 次幂