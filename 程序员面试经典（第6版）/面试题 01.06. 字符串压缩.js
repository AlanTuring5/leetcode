// 2022.09.24

// 字符串压缩。利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3。若“压缩”后的字符串没有变短，则返回原先的字符串。你可以假设字符串中只包含大小写英文字母（a至z）。

/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
    let len = S.length;
    // 空或一个字母
    if (len == 0 || len == 1) {
        return S
    }
    let n = 1;
    let s = '';
    // 从第二个开始遍历
    for (let i = 1; i < len; i++) {
        if (S[i] === S[i - 1]) {
            n++;
        } else {
            s += S[i - 1]
            s += n;
            n = 1;
        }
        // 判断新字符串与原字符串长度
        if (s.length + 2 >= len) {
            return S
        }
    }
    // 加上尾部
    s += S[len - 1];
    s += n;
    return s
};

// 测试案例
// "aabcccccaa"
// "abbccd"
// "a"
// ""
// "bb"