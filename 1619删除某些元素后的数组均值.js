//给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。
//解：计算arr的1/20到19/20之间数值平均值

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const len = arr.length;
    // 自带排序算法（实现：双重循环排序）
    // arr.sort((a,b)=> a-b);
    maopaoSort(arr);
    let sum = 0;
    for (let i = len / 20; i < 19 * len / 20; i++) {
        sum += arr[i]
    }
    return sum / (len * 0.9)
};

//冒泡排序
function maopaoSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let tmp = 0;
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

//冒泡排序，判断是否已经有序
function maopaoSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let changeFlag = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            let tmp = 0;
            if (arr[j] > arr[j + 1]) {
                changeFlag = false;
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }

        if (changeFlag) {
            break;
        }
    }
}

//冒泡排序，优化排序长度
function maopaoSort(arr) {
    let sortBorder = arr.length - 1;
    for (let i = 0; i < arr.length - 1; i++) {
        let changeFlag = true;
        let lastExchangeIndex = 0;
        for (let j = 0; j < sortBorder; j++) {
            let tmp = 0;
            if (arr[j] > arr[j + 1]) {
                changeFlag = false;
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if (changeFlag) {
            break;
        }
    }
}

//鸡尾酒排序：双向冒泡排序
function maopaoSort(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let exchangeFlag = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            let tmp = 0;
            if (arr[j] > arr[j + 1]) {
                exchangeFlag = false;
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
        if (exchangeFlag) {
            break;
        }

        exchangeFlag = true;
        for (let j = arr.length - i - 1; j > i; j--) {
            let tmp = 0;
            if (arr[j] < arr[j - 1]) {
                exchangeFlag = false;
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
        if (exchangeFlag) {
            break;
        }
    }
}