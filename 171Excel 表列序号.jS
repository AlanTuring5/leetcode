// 2022.09.16

// 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let number = 0;
    let multi = 1
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let code = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
        number += code * multi;
        multi *= 26;
    }
    return number
};

//1、26进制转十进制
