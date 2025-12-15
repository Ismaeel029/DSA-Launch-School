// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the number that appears first
// should be the first one in the output array.

// The problem guarantees that there will be either one
// unique pair that matches the target sum or no pairs at all.

// Test Cases:

const nums1 = [1, 3, 6, 7, 8, 12];
const target1 = 14;
console.log(findPair(nums1, target1)); // Output: [6, 8]

const nums2 = [2, 6, 8, 10];
const target2 = 17;
console.log(findPair(nums2, target2)); // null

// Start-End pointer based solution 
// Time Complexity O(N)
// Space Complexity O(1)
function findPair(arr, target){
    const N = arr.length;
    let startPointer = 0;
    let endPointer = N-1;
    let sum

    while(startPointer < endPointer){
        sum = arr[startPointer] + arr[endPointer];
        
        if(sum === target) return [arr[startPointer], arr[endPointer]];
        
        if(sum < target){
            startPointer += 1;
        }else if(sum > target){
            endPointer -= 1;
        }
    }
    return null
}

// EXPLANATION
/* 
1- Under which condtition do i move my start pointer: 
    When the sum of the start and end pointer element is less than the target number
2- Under which condtition do i move my end pointer: 
    When the sum of the start and end pointer element is greater than the target number
3- Does the start pointer do something besides moving?
    Recalculate the sum of the start and end pointer element
4- Does the end pointer do something besides moving?
    Recalculate the sum of the start and end pointer element
5- Under what conditions do i stop the loop?
    When the sum of the start and end pointer element equals the target number OR the start and 
    end pointer meets
*/