const reverseString = function(string) {
    let result = "";

    for(i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
