"use strict"

// Given a string `str`, reverse all the consonants in the
// string and return it. Consonants are all alphabetic characters
// except for the vowels `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`,
// which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true

// START-END POINTER APPROACH O(N)
function isConsonant(alphabet){
    const vowels = "aeiouAEIOU";
    if(vowels.includes(alphabet)) return false;
    return true;
}

function reverseConsonants(str){
    if(str.length ===0 || str.length===1) return str;
    
    const char = str.split('');

    let consonantCount = 0;
    char.forEach(c =>{
        if(isConsonant(c)) consonantCount++;
    });
    let swapCount = Math.floor(consonantCount/2);

    let start=0;
    let end = char.length-1;
    
    while(swapCount>0){
        if(!isConsonant(char[start])) {
            start++;
            continue;
        }
        if(!isConsonant(char[end])) {
            end--;
            continue;
        }

        
        [char[start], char[end]] = [char[end], char[start]];
        swapCount--; //reduce the swap count after swap
        start++;
        end--;
        
    }
    return char.join('');

}

//console.log("HELLO".split(''));