"use strict"

//Brute force approach O(N^2)
function findMajorityBrute(arr){
    let count;
    let N = arr.length; //array length
    let n = Math.floor((N+1)/2); // half of the array
    for(let i of arr){
        count = 0;
        for(let j of arr){
            if(i===j){
                count += 1
            }
        }
        if(count>=n) return i;
    }
    return null
}

//Reducing Time Complexity
function findMajority(arr){
    let map = new Map();
    let N = arr.length; //array length
    let n = Math.floor((N+1)/2); // half of the array

    for(let i of arr){
        map.set(i, (map.get(i) ?? 0) + 1);
        if(map.get(i)===n) return i;
    }
    return null;
}

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);