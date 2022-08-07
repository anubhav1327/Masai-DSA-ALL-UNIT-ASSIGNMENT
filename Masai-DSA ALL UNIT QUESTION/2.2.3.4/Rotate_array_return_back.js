// Rotate the array returns back 
// Description

// You are given an array of n elements and an integer k, you need to rotate the array by 
// k units.

// Input
// First-line contains t, which is the number of test cases
// For each test cases, first-line has n & k - the number of elements in the array and
//  the number of times the array has to be rotated

// The second line of each test case contains n numbers which represent the elements of
//  the array

// Constraints
// 1<=T<=20
// 1<=N<=50000, 0<=K<=1000000000
// 1 <= Ai <= 1000000

// Output
// out put N elements, elements of the array , rotated by K units



// Sample Input 1 

// 3
// 2 1
// 1 2
// 2 2
// 1 2
// 3 1
// 1 2 3
// Sample Output 1

// 2 1
// 1 2
// 3 1 2

function solve(n,k,arr){
    let str=""
        for(var i=n-k;i<n;i++){
            str+=arr[i]+" "
        }
        for(var i=0;i<n-k;i++){
            str+=arr[i]+" "
        }
        console.log(str)
   
}
let arr=[1,2,3],n=3,k=2;
solve(n,k,arr)
