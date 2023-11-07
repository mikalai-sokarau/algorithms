/*
Statement:
Trie is a tree-like data structure used to store strings.
The tries are also called prefix trees because they provide very efficient prefix-matching operations.
Implement a trie data structure with three functions that perform the following tasks:

Insert (word): This inserts a word into the trie.
Search (word): This searches the given word in the trie and returns TRUE, if found. Otherwise, return FALSE.
Search prefix (prefix): This searches the given prefix in the trie and returns TRUE, if found. Otherwise, return FALSE.


Complexity:
insert:
T: O(n)
S: O(1)

search:
T: O(n)
S: O(1)

searchPrefix:
T: O(n)
S: O(1

where n is the length of the word
*/

class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;

    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new Node();
      }
      curr = curr.children[char];
    }

    curr.isWord = true;
  }

  search(word) {
    const string = this.findString(word);

    return string && string.isWord;
  }

  searchPrefix(prefix) {
    return Boolean(this.findString(prefix));
  }

  findString(word) {
    let curr = this.root;

    for (const char of word) {
      if (!curr.children[char]) return false;

      curr = curr.children[char];
    }

    return curr;
  }
}
