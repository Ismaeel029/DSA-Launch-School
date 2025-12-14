"use strict"

function selectionSort(arr){
    const N = arr.length;
    for(let i=0; i<N; i++){
        let minIndex = i;
        for(let j=i+1; j<N; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

module.exports = selectionSort;