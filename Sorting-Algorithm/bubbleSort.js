"use strict"

function bubbleSort(arr){
    let N = arr.length;
    for(let i = 0; i<N-1; i++){
        let swapped = false
        for(let j=0; j<N-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true
            }
        }
        if(!swapped) break;
    }
    return arr;
}

module.exports = bubbleSort;