/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
    this.first = [];
    this.second = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    return this.first.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek();

    return this.second.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.second.length) {
        while (this.first.length) {
            this.second.push(this.first.pop());
        }
    }
    return this.second[this.second.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.first.length === 0 && this.second.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

