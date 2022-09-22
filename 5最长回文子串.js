// 2022.09.22

// 给你一个字符串 s，找到 s 中最长的回文子串。

/**
 * @param {string} s
 * @return {string}
 */

// 中心扩散法
var longestPalindrome = function (s) {
    if (!s) {
        return ""
    }
    let left = 0;
    let right = 0;
    let len = 1;
    let maxStart = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        left = i - 1;
        right = i + 1
        while (left >= 0 && s.charAt(left) == s.charAt(i)) {
            left--;
            len++;
        }
        while (right < s.length && s.charAt(right) == s.charAt(i)) {
            right++;
            len++;
        }
        while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
            len += 2
        }
        if (len > maxLen) {
            maxLen = len;
            maxStart = left;
            console.log(maxStart)
            console.log(maxLen)
        }
        len = 1
    }
    return s.slice(maxStart + 1, maxStart + maxLen + 1)
};

longestPalindrome("babad")