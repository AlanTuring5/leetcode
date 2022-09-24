// 2022.09.24

// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
    return s1.length === s2.length && [...s1].sort().join('') === [...s2].sort().join('')
};

// 1、join():把数组中的所有元素转换一个字符串,通过指定的分隔符进行分隔