// Two Sorted Arrays 
// Description

// You are given two arrays A and B, each of size N.
// The first array A, is sorted in ascending order, while the second array is sorted in 
// descending order.
// You have to find the number of elements common in both the arrays.
// Try to solve this without using any extra space.

// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case, contains N, the number of elements in the array A and B

// The next line of the test case, contains N space separated integers, denoting the number of 
// elements of the array A

// The next line contains N space separated integers, denoting elements of the array B.

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// 1 <=A[i]<= 1000


// Output
// For each test case, print the number of elements common in both the arrays, on a new line.


// Sample Input 1 

// 1
// 6
// 1 2 2 3 4 5
// 4 4 3 2 1 1
// Sample Output 1

// 4
// Hint

// In the sample test case, the number of elements common in both the arrays are {1,2,3,4}.
// +9
//  Therefore, the required output is 4.



function solve(arr1,arr2){
    let l=0;
    let count=0
    let r=arr2.length-1;
    while(l<r){
        if(arr1[l]==arr2[r]){
            count++
            l++
            r--
        }
    }
    return count
}
let arr1=[1,2,2,3,4,5];
let arr2=[4,4,3,2,1,1];
console.log(solve(arr1,arr2))