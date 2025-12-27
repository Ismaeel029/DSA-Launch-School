"use strict"

// Given a string, determine whether it is a valid palindrome or not.

// A palindrome string is a string that reads the same backwards as forwards.

// You may assume that the input will be in lowercase, containing
// valid English alphabet characters without white spaces.

// Input: "madam"
// Output: true

// Input: "abcbea"
// Output: false

function test(){
    console.log(isValidPalindrome("madam"));
    console.log(isValidPalindrome("abcbea"));
}
test()

/* 
TC - O(N^2), O(N) for recursion and O(N) for slice operation
=> if str.length is 1 or 0, it is a palindrom
=> if the first and last letter are equal, it is a palindrom
=> Use recursive function on the rest of the str.
*/
// function isValidPalindrome(str){
//     if(str.length < 2) return true;

//     return (
//         str[0] === str[str.length-1] && isValidPalindrome(str.slice(1,str.length-1))
//     );
// }

//Using start-end Pointers to redunce TC to O(N)
function isValidPalindrome(str){
    return isValidPalindromeHelper(str, 0, str.length-1);
}
function isValidPalindromeHelper(str, start, end){
    if(end<=start) return true  //BASE CASE

    return (
        str[end] === str[start] &&
        isValidPalindromeHelper(str, start+1, end-1)
    );  // RECURSIVE CASE
}

/* 
CALL STACK FOR isValidPalindrom for madam
=> Add isValidPalindrome("madam") to the stack, call isValidPalindromeHelper("madam", 0, 4)
    return true && isValidPalindromeHelper("madam", 1,3)
=> Add isValidPalindromeHelper("madam", 1,3) to the stack
    return true && isValidPalindromeHelper("madam", 2,2)
=> Add isValidPalindromeHelper("madam", 2,2) to the stack
    return true (end=start)
=> Remove isValidPalindromeHelper("madam", 2,2) from the stack returning true
=> Back to isValidPalindromeHelper("madam", 1,3)
    return true && true
=> Remove isValidPalindromeHelper("madam", 1,3) from the stack returning true
=> Back to isValidPalindromeHelper("madam", 0,4)
    return true && true
=> Remove isValidPalindromeHelper("madam", 0,4) returning true
=> Back to isValidPalindrome("madam"), returning true
=> END
*/