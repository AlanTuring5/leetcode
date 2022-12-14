// 2022.09.24

// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。回文串不一定是字典当中的单词。

/**
 * @param {string} s
 * @return {boolean}
 */
// 回文串：最多只有一个字母是奇数
// 集合
var canPermutePalindrome = function (s) {
    let letterSet = new Set();
    for (let i = 0; i < s.length; i++) {
        if (letterSet.has(s[i])) {
            letterSet.delete(s[i])
        } else {
            letterSet.add(s[i]);
        }
    }
    return letterSet.size == 0 || letterSet.size == 1;
};
