/**
 * @constructor
 */
var WordDictionary = function() {
    this.letters = {};
    this.end = false;
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    var letters = this.letters;
    if (word === '') {
        this.end = true;
    } else {
        if (!(word[0] in letters)) {
            letters[word[0]] = new WordDictionary();
        }
        letters[word[0]].addWord(word.slice(1));
    }
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    var letters = this.letters;
    if (word === '') {
        return this.end;
    } else if (word[0] === '.') {
        return Object.keys(letters).some(s => letters[s].search(word.slice(1)));
    } else {
        return word[0] in letters && letters[word[0]].search(word.slice(1));
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
