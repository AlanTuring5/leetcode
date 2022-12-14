//给你一个整数数组 arr ，请你删除最小 5% 的数字和最大 5% 的数字后，剩余数字的平均值。
//解：计算arr的1/20到19/20之间数值平均值

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const len = arr.length;
    // 自带排序算法（JS sort原理：https://zhuanlan.zhihu.com/p/33626637）
    // arr.sort((a,b)=> a-b);
    maopaoSort(arr);
    let sum = 0;
    for (let i = len / 20; i < 19 * len / 20; i++) {
        sum += arr[i]
    }
    return sum / (len * 0.9)
};

//冒泡排序：一次将一个最大元素冒泡到最右边
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

//冒泡排序，使用标志位，判断是否已经有序，如果有进行交换操作则仍无序，否则有序
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

//冒泡排序，优化排序长度，记录交换位置下标，下次排序只需排序到该位置即可
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

//鸡尾酒排序：双向冒泡排序，一次将最大和最小元素冒泡到最右边和最左边
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

//快速排序：双向，递归
function quickSort(arr,startIndex,endIndex){
    if(startIndex >= endIndex){
        return;
    }

    let pivotIndex = patition(arr,startIndex,endIndex);
    quickSort(arr,startIndex,pivotIndex-1);
    quickSort(arr,pivotIndex+1,endIndex);
}

function patition(arr,startIndex,endIndex){
    const pivot = arr[startIndex];
    let left = startIndex;
    let right = endIndex;

    while(left != right){
        while(left < right && arr[right] > pivot){
            right--;
        }

        while(left < right && arr[left] <= pivot){
            left++;
        }

        if(left<right){
            [arr[left],arr[right]] = [arr[right],arr[left]]
        }

    }

    [arr[startIndex],arr[left]] = [arr[left],arr[startIndex]];
    return left
}

//快速排序：单向，递归
执行用时：60 ms, 在所有 JavaScript 提交中击败了88.17%的用户
内存消耗：41.8 MB, 在所有 JavaScript 提交中击败了51.61%的用户

function patition(arr,startIndex,endIndex){
    const pivot = arr[startIndex];
    let mark = startIndex;
    for(let i=startIndex+1; i<= endIndex; i++){
        if(arr[i] < pivot){
            mark++;
            [arr[i],arr[mark]] =[arr[mark],arr[i]]
        }
    }
    [arr[startIndex],arr[mark]]=[arr[mark],arr[startIndex]];
    return mark;
}

//堆排序：https://blog.csdn.net/qq_28063811/article/details/93034625/
function downAdjust(arr,parentIndex,length){
    childrenIndex = parentIndex*2 + 1;
    const temp = arr[parentIndex];
    while(childrenIndex < length){
        if(childrenIndex+1 < length && arr[childrenIndex+1] > arr[childrenIndex]){
            childrenIndex++;
        }
        if(temp>= arr[childrenIndex]){
            break;
        }
        arr[parentIndex] = arr[childrenIndex];
        parentIndex = childrenIndex;
        childrenIndex = childrenIndex*2 + 1;
    }
    arr[parentIndex] = temp;
}

function heapSort(arr){
    for(let i=(arr.length-2)/2;i>=0;i--){
        downAdjust(arr,i,arr.length);
    }
    for(let i=arr.length-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]];
        downAdjust(arr,0,i)
    }
}

//计数排序
function countSort(arr){
    let countArray = [];
    for(let i=0;i<arr.length;i++){
        if(countArray[arr[i]]){
            countArray[arr[i]]++;
            continue;
        }
        countArray[arr[i]] = 1;
    }
    let index = 0;
    let sortArray = []
    for(let i=0;i<countArray.length;i++){
        for(let j=0;j<countArray[i];j++){
            sortArray[index++] = i;
        }
    }
    return sortArray;
}