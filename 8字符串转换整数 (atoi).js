// 2022.09.23

// 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
    let sign = 1;
    let ans = 0;
    let i = 0
    while (s[i] === " ") {
        i++;
    }
    if (s[i] == '+' || s[i] == '-') {
        sign = s[i] == '-' ? -1 : 1;
        i++;
    }
    for (; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            ans = ans * 10 + +s[i];
            if (ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)) {
                return sign == 1 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31)
            }
        }
        else {
            break;
        }
    }
    return sign * ans
};

myAtoi("   -42")

// 自动机
var myAtoi = function (s) {
    let rev = 0;
    let sign = 1;
    let state = 'start';
    let table = {
        'start': ['start', 'signed', 'in_number', 'end'],
        'signed': ['end', 'end', 'in_number', 'end'],
        'in_number': ['end', 'end', 'in_number', 'end'],
        'end': ['end', 'end', 'end', 'end'],
    };

    for (let i = 0; i < s.length; i++) {
        state = table[state][getCol(s[i])];
        if (state == 'in_number') {
            rev = rev * 10 + +s[i];
            if (rev > Math.pow(2, 31) - 1 || rev < Math.pow(-2, 31)) {
                return sign == 1 ? Math.pow(2, 31) - 1 : Math.pow(-2, 31)
            }
        }
        if (state == 'signed') {
            sign = s[i] == '-' ? -1 : 1;
        }
    }
    return rev * sign
};

function getCol(letter) {
    if (letter == ' ')
        return 0;
    if (letter == '+' || letter == '-')
        return 1;
    if (letter >= '0' && letter <= '9')
        return 2;
    return 3;
}