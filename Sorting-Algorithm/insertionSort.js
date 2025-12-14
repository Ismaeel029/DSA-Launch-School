"use strict"

function insertionSort(arr){
    const N = arr.length;
    for(let i=1; i<N; i++){
        let currentIndex = i
        let j = i-1;

        while(j>=0 && arr[j] > arr[currentIndex]){
            currentIndex = j;
            arr[j+1] = arr[j];
            j--;
        }
        arr[currentIndex] = arr[j+1];
    }
    return arr;
}

module.exports = insertionSort;