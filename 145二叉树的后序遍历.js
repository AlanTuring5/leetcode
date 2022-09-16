// 2022.09.16

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let record = [];
    orderSort(root, record)
    return record
};

function orderSort(root, record) {
    if (!root) {
        return
    }

    orderSort(root.left, record);
    orderSort(root.right, record);
    record.push(root.val)
}

// 迭代
var postorderTraversal = function (root) {
    let record = [];
    let stack = [];
    stack.push([0, root])

    while (stack.length) {
        let op, node;
        [op, node] = stack.pop();
        if (!node) {
            continue
        }
        if (op == 1) {
            record.push(node.val)
        }
        else {
            stack.push([1, node]);
            stack.push([0, node.right]);
            stack.push([0, node.left]);
        }
    }
    return record
};