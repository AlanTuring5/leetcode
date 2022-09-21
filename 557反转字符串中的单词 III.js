// 2022.09.21

// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 执行用时：64 ms, 在所有 JavaScript 提交中击败了94.61 %的用户
// 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了49.62 %的用户

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const len = s.length
    let stack = []
    let reverse = ''
    for (let i = 0; i <= len; i++) {
        if (i === len || s[i] === ' ') {
            while (stack.length) {
                reverse += stack.pop()
            }
            if (i === len) {
                return reverse
            }
            reverse += ' '
            continue;
        }
        stack.push(s[i])
    }
    return reverse
};

// 1、字符串不可变，s[0] = 2 ❌
// 2、字符串长度，s.length
// 3、字符串拼接，s.join('')