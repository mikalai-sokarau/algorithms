const inOrder = (node, list) => {
    if (node.left) {
        inOrder(node.left, list);
    }

    list.push(node.val);

    if (node.right) {
        inOrder(node.right, list);
    }

    return list;
}
//            9
//        4       20
//     1    6  15    170  
// LNR
// [1, 4, 6, 9, 15, 20, 170]

const preOrder = (node, list) => {
    list.push(node.val);

    if (node.left) {
        preOrder(node.left, list);
    }
    if (node.right) {
        preOrder(node.right, list);
    }

    return list;
}
//            9
//        4       20
//     1    6  15    170  
// NLR
// [9, 4, 1, 6, 20, 15, 170] 

const postOrder = (node, list) => {
    if (node.left) {
        postOrder(node.left, list);
    }
    if (node.right) {
        postOrder(node.right, list);
    }

    list.push(node.val);

    return list;
}
//            9
//        4       20
//     1    6  15    170  
// LRN
// [1, 6, 4, 15, 170, 20, 9]