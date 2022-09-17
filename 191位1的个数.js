// 2022.09.17

// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。

/**
 * @param {number} n - a positive integer
 * @return {number}
 */


// 位运算
var hammingWeight = function (n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if (n & (1 << i)) {
            ret++;
        }
    }
    return ret
};

// 位运算优化
// n&(n - 1)，其运算结果恰为把 n 的二进制位中的最低位的 1 变为 0 之后的结果。
var hammingWeight = function (n) {
    let ret = 0;
    while (n) {
        n &= (n - 1)
        ret++
    }
    return ret
};