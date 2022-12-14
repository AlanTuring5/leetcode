// 2022.09.15

// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个回文串 。
// 字母和数字都属于字母数字字符。
// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

// 执行用时：56 ms, 在所有 JavaScript 提交中击败了98.96%的用户
// 内存消耗：43.3 MB, 在所有 JavaScript 提交中击败了71.31%的用户

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] == s[s.length - 1 - i]) {
            continue;
        }
        else {
            return false
        }
    }
    return true
};

// 1、字符串删除所有非字母数字
// s.replace(/[^0-9a-zA-Z]/g, '');

// 2、字符串去除空格
// s.trim()

// 3、字符串改变大小写
// s.toLowerCase()
// s.toUpperCase()

// 4、字符串比较
