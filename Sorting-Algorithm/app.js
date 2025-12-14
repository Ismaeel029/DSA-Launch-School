const selectionSort = require('./selectionSort');
const bubbleSort = require('./bubbleSort');
const insertionSort = require('./insertionSort');

function main(){
    let unsortedArray = [4,2,1,7]

    console.log(`Bubble Sort: ${bubbleSort(unsortedArray)}`);
    console.log(`Selection Sort: ${selectionSort(unsortedArray)}`);
    console.log(`Insertion Sort: ${insertionSort(unsortedArray)}`)
}

main();