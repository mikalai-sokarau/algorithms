/*
Statement:
For the given stream of message requests and their timestamps as input, you must implement
a logger rate limiter system that decides whether the current message request is displayed.
The decision depends on whether the same message has already been displayed in the last S seconds.
If yes, then the decision is FALSE, as this message is considered a duplicate.
Otherwise, the decision is TRUE.


Test:
Input:
[[1, "good morning"], [5, "hello world"], [6, "good morning"], [7, "good morning"], [15, "hello world"]]

Output:
[true, true, false, false, true]


Complexity:
T: O(1)
S: O(r) where r is number or different request messages
*/

var requestLogger = function (timeLimit) {
  this.limit = timeLimit;
  this.store = new Map();
};

requestLogger.prototype.messageRequestDecision = function (timestamp, request) {
  const prevTimestamp = this.store.get(request);

  if (!prevTimestamp || prevTimestamp + this.limit <= timestamp) {
    this.store.set(request, timestamp);
    return true;
  }

  return false;
};
