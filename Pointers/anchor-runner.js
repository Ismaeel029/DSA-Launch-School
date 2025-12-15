"use strict"

// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

// Example:
// Input: nums = [1, 2, 1, 4, 8]
// Output: [2, 4, 8, 1, 1]

// BRUTE FORCE O(N^2)
function moveOnesBrute(arr){
    const N = arr.length;
    let index = 0;
    let counter = 0;

    while(counter<N){
        if(arr[index] === 1){
            arr.splice(index,1);
            arr.push(1);
        }else{
            index++;
        }
        counter++
    }
    return arr;
}

// ANCHOR-RUNNER POINTER based solution O(N)
function moveOnes(arr){
    const N = arr.length;
    let anchor = 0;    //position at the start of the array
    let runner = 0;   //positioned at the start of the array

    while(runner < N){
        if(arr[runner] !== 1){
            //swap when runner element is not equal to 1
            [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
            
            anchor++    // increment anchor when a swap is made
        }
        runner++    //increment in every iteration
    }
    return arr;
}

//READER-WRITER VARIANT O(N)
function moveOnesRW(arr){
    const N = arr.length;
    let reader = 0;
    let writer = 0;
    while(reader< N){
        if(arr[reader] !== 1){
            arr[writer] = arr[reader] //overwrites it with non-one element
            writer++
        }
        reader++ //increment in every iteration
    }
    
    while(writer<N){
        arr[writer] = 1;
        writer++;
    }
    return arr;
}

function main(){
    console.log(`Brute Force: ${moveOnesBrute([1, 2, 1, 4, 8])}`)
    console.log(`Anchor-Runner: ${moveOnes([1, 2, 1, 4, 8])}`);
    console.log(`Reader-Writer: ${moveOnesRW([1, 2, 1, 4, 8])}`);
}

main();