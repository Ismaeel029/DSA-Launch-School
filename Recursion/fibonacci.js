"use strict"

// function fibonacci(n){
//     if(n<=1) return n; //BASE CASE
    
//     return fibonacci(n-1) + fibonacci(n-2); // RECURSIVE CASE
// }

console.log(fibonacci(6));

/*
TIME COMPLEXITY 
=> Each function call calls two fibonacci function.
=> Exponential function call, TC = O(2^N)

SPACE COMPLEXITY O(N)
*/


/*
CALL STACK fibonacci(4) - calling the left side first 
=> Add fibonacci(4) to the stack, calls fibonacci(3)+fibonacci(2)
=> Add fibonacci(3) to the stack, calls fibonacci(2)+fibonacci(1)
=> Add fibonacci(2) to the stack, calls fibonacci(1) + fibonacci(0)
=> Add fibonacci(1) to the stack, returns 1
=> Remove fibonacci(1) from the stack, back to fibonacci(2), calls 1 + fibonacci(0)
=> Add fibonacci(0) to the stack, returns 0
=> Remove fibonacci(0) from the stack, back to fibonacci(2), returns 1+0=1
=> Remove fibonacci(2) from the stack, back to fibonacci(3), calls 1+fibonacci(1)
=> Add fibonacci(1) to the stack, returns 1
=> Remove fibonacci(1) from the stack, back to fibonacci(3), return 1+1=2
=> Remove fibonacci(3) from the stack, back to fibonacci(4), calls 2+fibonacci(2)
=> Add fibonacci(2) to the stack, calls fibonacci(1)+fibonacci(0)
=> Add fibonacci(1) to the stack, returns 1
=> Remove fibonacci(1) from the stack, back to fibonacci(2), calls 1 + fibonacci(0)
=> Add fibonacci(0) to the stack, returns 0
=> Remove fibonacci(0) from the stack, back to fibonacci(2), returns 1+0=1
=> Remove fibonacci(2) from the stack, back to fibonacci(4), returns 2+1=3;
=> Remove fibonacci(4) from the stack
=> END
*/

//USING HELPER FUNCTION

function fibonacciHelper(num, cache){
    if(num<=1){
        return num; //BASE CASE
    }
    
    if(num in cache) return cache[num]; // return stored number

    cache[num] = fibonacciHelper(num-1, cache) + fibonacciHelper(num-2, cache); // RECURSIVE BASE
    return cache[num]; //store in cache and return
}

function fibonacci(num){
    return fibonacciHelper(num, {})
}