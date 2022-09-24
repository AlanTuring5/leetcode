// 2022.09.24

// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    let sum = 0;
    for (let i = 0; i < astr.length; i++) {
        let move = 1 << (astr[i].charCodeAt() - 'a'.charCodeAt());
        if (sum & move) {
            return false
        }
        sum |= move;
    }
    return true;
};