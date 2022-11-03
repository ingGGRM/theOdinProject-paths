const palindromes = function (palindrome) {
    let revPalindrome = '';
    let  re = /[^A-Za-z0-9]/g;
    palindrome = palindrome.toLowerCase().replace(re, '');

    for(let i = palindrome.length-1; i >= 0; i--) {
        
        revPalindrome += palindrome[i];
    }

    return palindrome == revPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
