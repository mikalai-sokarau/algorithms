/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */

// @lc code=start
var Bucket = function () {
  this.bucket = [];
}

Bucket.prototype.update = function (key, value) {
  for (let i = 0; i < this.bucket.length; i++) {
    if (this.bucket[i][0] === key) {
      this.bucket[i] = [key, value];
      return;
    }
  }

  this.bucket.push([key, value]);
}

Bucket.prototype.remove = function (key) {
  for (let i = 0; i < this.bucket.length; i++) {
    if (this.bucket[i][0] === key) {
      this.bucket[i] = this.bucket[this.bucket.length - 1];
      this.bucket.length = this.bucket.length - 1;
      return;
    }
  }
}

Bucket.prototype.get = function (key) {
  if (!this.bucket.length) return -1;

  for (const [k, v] of this.bucket) {
    if (key === k) return v;
  }

  return -1;
}

var MyHashMap = function () {
  this.key = 2069;
  this.data = [];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const k = key % this.key;

  if (!this.data[k]) this.data[k] = new Bucket();

  this.data[k].update(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const k = key % this.key;

  if (!this.data[k]) return -1;

  return this.data[k].get(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const k = key % this.key;

  if (!this.data[k]) return;

  this.data[k].remove(key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
