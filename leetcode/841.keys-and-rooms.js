/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
/*
Complexity:
T: O(n)
S: O(n + m) where n is the number of rooms, m is the number of visited rooms
*/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const stack = [rooms[0]];
  const seen = new Set([0]);

  while (stack.length) {
    const keys = stack.pop();

    for (const key of keys) {
      if (!seen.has(key)) {
        stack.push(rooms[key]);
        seen.add(key);
      }
    }
  }

  return seen.size === rooms.length;
};

var recursive = function (rooms) {
  const seen = new Set([0]);

  const dfs = (room) => {
    for (const key of room) {
      if (!seen.has(key)) {
        seen.add(key);
        dfs(rooms[key]);
      }
    }
  };

  dfs(rooms[0]);

  return seen.size === rooms.length;
};
// @lc code=end
