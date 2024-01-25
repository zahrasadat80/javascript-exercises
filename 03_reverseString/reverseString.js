const reverseString = function(str) {
    let newWord  = '';
    for(i=0 ; i<str.length ; i++){
        newWord += str[str.length-(i+1)]
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
