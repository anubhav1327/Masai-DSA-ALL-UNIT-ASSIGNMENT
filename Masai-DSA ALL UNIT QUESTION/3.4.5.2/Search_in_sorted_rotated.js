// Search in sorted and rotated array 
// Description

// Given a sorted(increasing order) array of length n and is rotated by some value
//  beforehand. Find the index of the target element  K in the rotated array in O(logn)
//  time. If not found print -1.

// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot
//  unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.

// Please note that the linear search approach with the time complexity of O(n) can 
// easily be applied. But you are expected to solve it in O(log n) time complexity

// Note: Array contains all distinct elements.


// Input
// Input Format

// First line consists of n and k separated by space.

// Second line consists of n integers separated by spaces

// Constraints

// 1 <= n <= 50

// k <= 50

// Output
// Print index of the target element


// Sample Input 1 

// 5 1
// 3 4 5 1 2
// Sample Output 1

// 3
// Sample Input 2 

// 6 6
// 3 4 7 9 1 2
// Sample Output 2

// -1


function runProgram(input){
    let line=input.split("\n");
    let [N,K]=line[0].trim().split(" ").map(Number);
    let arr=line[1].trim().split(" ").map(Number);
    let pivot = solve(arr)
    
    let ans = find(arr, K, 0, pivot)
    if (ans == -1) {
        ans = find(arr, K, pivot + 1, arr.length - 1)
    }
    console.log(ans)

}
function find(arr, K, l, h) {
    
    while (l <= h) {
        let mid = l + parseInt((h - l) / 2)
        
        if (arr[mid] == K) {
                return mid
            }
            
            if (arr[mid] > K) {
                h = mid - 1
            } else {
                l = mid + 1
            }
        }
        
        return -1
    }
    
    function solve(arr) {
        if (arr.length == 1) {
            return 0
        }
    
        let l = 0
        let h = arr.length - 1
        while (l <= h) {
            let mid = l + parseInt((h - l) / 2)
            if (l < mid && arr[mid] < arr[mid - 1]) {
                return mid - 1
            }
            if (mid < h && arr[mid] > arr[mid + 1]) {
                return mid
            }
            if (arr[l] >= arr[mid]) {
                h = mid - 1
            } else {
                l = mid + 1
            }
        }
        
        return -1
    }
    
