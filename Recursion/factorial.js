"use strict"

function factorial(number){
    if(number < 0) return 'Input error';
    if(number === 1 || number===0) return 1; //BASE CASE

    return number * factorial(number - 1); // RECURSIVE CASE
}

console.log(factorial(5));

// THE CALL STACK
/*
=> Add function factorial(5) to the stack, calls 5*factorial(4)
=> Add factorial(4) to the stack, calls 4*factorial(3)
=> Add factorial(3) to the stack, calls 3*factorial(2)
=> Add factorial(2) to the stack, calls 2*factorial(1)
=> Add factorial(1) to the stack, base case returns 1.
=> Remove factorial(1) from the stack, returning 1 
=> Remove factorial(2) from the stack returning 2*1=2
=> Remove factorial(3) from the stack returning 3*2=6
=> Remove factorial(4) from the stack returning 4*6=24
=> Remove factorial(5) from the stack returning 5*24=120
=> Empty stack, function ends
*/