/*
Statement:
The latest version of a software product fails the quality check.
Since each version is developed upon the previous one, all the versions created after a bad version are also considered bad.
Suppose you have n versions with the IDs [1,2,...,n], and you have access to an API function
that returns TRUE if the argument is the ID of a bad version.
Find the first bad version that is causing all the later ones to be bad.
Additionally, the solution should also return the number of API calls made during the process
and should minimize the number of API calls too.

Test:
100   :  [67,7]
13    :  [10,3]


Complexity:
T: O(log n)
S: O(1)
*/

import API from './api.js';

let versionApi = new API(0);

function isBadVersion(v) {
  return versionApi.isBad(v);
}

/**
 *
 * @param {*} n last_api_number
 * @returns [first_bad_version, number_of_calls]
 */
export function firstBadVersion(n) {
  // -- DO NOT CHANGE THIS SECTION
  versionApi.n = n;
  // --
  let first = 1;
  let last = n - 1;
  let calls = 0;

  while (first < last) {
    middle = Math.floor((first + last) / 2);
    calls++;

    if (isBadVersion(middle)) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return [first, calls];
}
