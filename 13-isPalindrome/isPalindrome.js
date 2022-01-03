function isPalindrome(word) {
    const len = word.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
		 
}

// Do not edit this line;
module.exports = isPalindrome;