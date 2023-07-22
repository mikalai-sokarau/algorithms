const breadthFirstSearch = (list) => {
    if (!list) return null;

    const queue = [];
    const result = [];
    
    queue.push(list);

    while (queue.length) {
        const current = queue.pop();
        
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    
        result.push(current.val);
    }

    return result;
}