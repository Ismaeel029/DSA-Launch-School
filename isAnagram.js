"use strict"

//  write a function to check if two strings are anagrams of each other. 
//  An anagram of a string is another string that contains the same characters, only the order of 
//  characters can be different. For example, CBDA is an anagram of ABCD.

/* 
TIME COMPLEXITY - O(N)
SPACE COMPLEXITY - O(N)
=> Compare the lenght of the two strings, return false if not equal
=> convert the string to an array
=> Declare a map for counting characters
=> For the first string, check each character and assign its count in the map
=> For the second string, check each character and decrease its count from the map
=> If a character is not in the map, return false
=> If a character count less than 0, return false
=> At the end 
*/

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    
    const map = new Map();
    const array1 = str1.split('');
    const array2 = str2.split('');

    for(let i of array1){
        //map.set(i, map.get(i)+1 ?? 1);
        if(map.has(i)){
            map.set(i, map.get(i)+1);
        }else{
            map.set(i,1);
        }
    }
    for(let j of array2){
        if(!map.has(j)) return false;
        
        map.set(j, map.get(j)-1);
        if(map.get(j)<0) return false;
    }
    
    return true;
}

console.log(isAnagram("ABCD", "CBDA"));
console.log(isAnagram("TRIM", "IRMT"));
console.log(isAnagram("BARBER", "BARBAR"));
console.log(isAnagram("GEEKSFORGEEKS", "FORGEEKSGEEKD"));
console.log(isAnagram("ABOK", "BOOK"));
