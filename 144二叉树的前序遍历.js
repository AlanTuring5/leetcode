// 2022.09.16
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

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
var preorderTraversal = function (root) {
    let order = [];
    orderSort(root, order);
    return order
};

function orderSort(root, order) {
    if (!root) {
        return
    }
    order.push(root.val);
    orderSort(root.left, order);
    orderSort(root.right, order);
}

//迭代
var preorderTraversal = function (root) {
    let stack = [];
    let record = [];
    stack.push([0, root]);
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
            stack.push([0, node.right])
            stack.push([0, node.left]);
            stack.push([1, node]);
        }
    }
    return record
};