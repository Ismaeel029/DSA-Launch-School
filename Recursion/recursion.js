"use strict"

/* 
RECURSIVE ALGORITHM
=> Well defined BASE CASE to prevent Stack Overflow
=> RECURSIVE CASE to reduce the recursion and bring it closer to the base case
=> Stack follow the LIFO operation
*/


//loop
// function populationCount(number){
//     for(let i = number; i>=0; i--){
//         console.log(i);
//     }
// }

//Recursion
function populationCount(number){ 
    console.log(number);
    if(number === 0 ) return;   //BASE CASE
    populationCount(number-1);  //RECURSIVE CASE
}
populationCount(10);