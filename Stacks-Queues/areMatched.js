"use strict"

const Stack = require('./stack');

// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false

// console.log(correlate(']'));
// console.log(isOpeningBracket(')'))

function correlate(char){
    if(char==="(") return ")";
    if(char==="[") return "]";
    if(char==="{") return "}";
    throw new Error('An edge case.')
}
function isOpeningBracket(char){
    if("([{".includes(char)) return true;
    return false
}

function areMatched(str){
    if(str.length === 0) return true;
    
    const stack = new Stack();
    const charArray = str.split('');

    for(let i=0; i<charArray.length; i++){
        if(isOpeningBracket(charArray[i])){ // check if it's an open bracket
            stack.push(charArray[i]);   // push open brackets to stack
        }else{
            let lastQueueValue = stack.peek(); //peek stack
            if(correlate(lastQueueValue) === charArray[i]){ //check if the closing braket match the opening
                stack.pop(); // remove if it match
            }else{
                return false; // end the loop and function if it doesn't
            }
        }
    }
    return true;
}

//LAUNCH SCHOOL SOLUTION
/*
function areMatched(string) {
  const stack = [];
  const matches = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of string) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else if ([')', ']', '}'].includes(char)) {
      if (stack.length === 0 || matches[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false
*/