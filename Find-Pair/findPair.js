"use strict"
// Brute force approach O(N^2)
function findPairBrute(arr){
    let firstElement, secondElement
    
    for(let startIndex=0; startIndex<=arr.length-2; startIndex++){
        firstElement = arr[startIndex];
        for(let endIndex=startIndex+1; endIndex<=arr.length-1; endIndex++){
            secondElement = arr[endIndex]
            if(firstElement+secondElement === 10) return [firstElement,secondElement];
        }
    }
    return null
}

//Reducing the Time Complexity O(N)
function findPair(arr){
    let current, correlate;
    let map = new Map();
    const N = arr.length;

    for(let i=0; i<N; i++){
        current = arr[i];
        correlate = 10 - current;

        if(map.has(correlate)) return [correlate, current]
        map.set(current, i);
    }
    return null;
}

console.log(findPair([2,3,9,7]));
console.log(findPair([10,6,-1,2]));
console.log(findPair([1,2,5,6]));
console.log(findPair([1,3,6,10,4,5]));
console.log(findPair([4,-5,3,15,5]));