/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
class Letter {
    constructor(isEnd = false) {
        this.children = {};
        this.isEnd = isEnd;
    }
}

var Trie = function() {
    this.head = new Letter();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.head;

    for (let char of word) {
        const child = current.children[char];

        if (!child) {
            current.children[char] = new Letter();
        }

        current = current.children[char];
    }

    current.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const found = this._find(word);

    return Boolean(found) && found.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const found = this._find(prefix);

    return Boolean(found);
};

/** 
 * @param {string} word
 * @return {string}
 */
Trie.prototype._find = function(word) {
    let current = this.head;

    for (let char of word) {
        const child = current.children[char];

        if (!child) {
            return null;
        }

        current = child;
    }

    return current;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end