/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    return {};
};

var Trie = function() {
    this.root = TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    var node = this.root;
    for (var s of word.split('')) {
        if (!(s in node)) {
            node[s] = TrieNode();
        }
        node = node[s];
    }
    node.end = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var node = this.root;
    for (var s of word.split('')) {
        if (!(s in node)) {
            return false;
        }
        node = node[s];
    }
    return !!node.end;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    var node = this.root;
    for (var s of prefix.split('')) {
        if (!(s in node)) {
            return false;
        }
        node = node[s];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */
