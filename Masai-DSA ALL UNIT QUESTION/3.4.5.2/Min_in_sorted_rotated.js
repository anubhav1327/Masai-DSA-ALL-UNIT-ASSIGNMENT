// Minimum in sorted & rotated array 
// Description

// Given an array of length n, and it is sorted and rotated at some unknown point,
//  find the minimum element in it.

// In a sorted & rotated array,  we rotate an ascending order sorted array at some 
// pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

// Please note that the linear search approach with the time complexity of O(n) can 
// easily be applied. But you are expected to solve it in O(log n) time complexity

// Input
// Input Format
// First line Consists of integer n.
// Second line consists of n integers separated by spaces.

// Constraints
// 1 <= n <= 10^6

// Output
// Print minimum element.


// Sample Input 1 

// 10
// 4 6 7 9 10 -1 0 1 2 3
// Sample Output 1

// -1

// function runProgram(input){
//     let line=input.split("\n");
//     let N=+line[0];
//     let arr=line[1].trim().split(" ").map(Number)
//     let l = 0
//     let h = arr.length - 1
    
//     console.log(solve(arr,l,h))
// }
function solve(arr,l,h) {
   
    while (l <= h) {
        let mid = l + parseInt((h - l) / 2)
        if (l < mid && arr[mid - 1] > arr[mid]) {
            return arr[mid]
        }
        
        if (mid < h && arr[mid] > arr[mid + 1]) {
            return arr[mid + 1]
        }
        
        if (arr[l] >= arr[mid]) {
            h = mid - 1
        } else {
            l = mid + 1
        }
    }
    
    return arr[0]
}
let arr=[4, 6, 7, 9, 10,98, -1, 0, 1, 2 ,3]
let l=0
let h=arr.length-1
console.log(solve(arr,l,h))