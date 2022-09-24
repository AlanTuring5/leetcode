// 2022.09.24

// 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
    let s1Len = s1.length;
    let s2Len = s2.length;
    // 1、长度不一致
    if (s1Len !== s2Len) {
        return false
    }
    // 2、长度一致：2-1：长度为0
    if (s1Len === 0) {
        return true
    }
    // 2、长度一致：2-2：长度不为0
    for (let i = 0; i < s1Len; i++) {
        // 3、找到第一个相同字母
        if (s1[i] == s2[0]) {
            let j = 0;
            while (j < s1Len) {
                j++;
                // 3-1：如果后面出现不一致的字母
                if (s1[(i + j) % s1Len] !== s2[j]) {
                    break;
                }
            }
            // 3-2：后面字母全部都一致
            if (j == s1Len) {
                return true
            }
        }
    }
    return false;
};

// s2 ∈ (s1+s1)
var isFlipedString = function (s1, s2) {
    return s1.length === s2.length && (s1 + s1).lastIndexOf(s2) != -1;
};