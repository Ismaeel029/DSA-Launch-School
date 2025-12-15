"use strict"

// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.

// BINARY BRUTE
// function minimumCount(arr){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){
//         let mid = Math.floor((left+right)/2);

//         if(arr[mid] === 0){
//             right = mid;
//             left = mid;
//             break;
//         }else if(arr[mid] < 0){
//             left = mid+1;
//         }else{
//             right = mid-1;
//         }
//     }
//     let negativeCount = left
//     let positiveCount = arr.length - right - 1;
    
//     if(negativeCount < positiveCount) return negativeCount;
//     return positiveCount;
// }

//BINARY SEARCH
function minimumCount(arr){
    let positiveCount = arr.length - findPositiveIndex(arr);
    let negativeCount = findNegativeIndex(arr) + 1;
    if(positiveCount < negativeCount) return positiveCount;
    return negativeCount;
}

function findNegativeIndex(arr){
    let left = 0;
    let right = arr.length - 1;
    let negativeIndex = -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]===0){
            right = mid-1;
        }else if(arr[mid]<0){
            negativeIndex = mid;
            left = mid+1;
        }else{
            right = mid-1
        }
    }
    return negativeIndex;
}

function findPositiveIndex(arr){
    let left=0;
    let right=arr.length-1;
    let positiveIndex=arr.length;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]=== 0){
            left = mid+1;
        }else if(arr[mid] < 0){
            left = mid+1;
        }else{
            positiveIndex = mid
            right = mid-1;
        }
    }
    return positiveIndex
}