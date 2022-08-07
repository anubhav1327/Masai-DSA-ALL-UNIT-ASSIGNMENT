// Take out maximum 
// Description

// Given an array of integers and a number k,find the maximum sum of a subarray of size k.

// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.


// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21

function solve(arr,k){
    let mx=-1000;
    let sum=0
  for(let i=0;i<k;i++){
    sum+=arr[i]
 }
if(sum>mx)
mx=sum
for(var j=k;j<arr.length;j++){
    
    sum-=arr[j-k];
    sum+=arr[j]
    if(sum>mx){
        mx=sum
    }
}
console.log(mx)
}
let arr=[9,9,9,1,4,4,1,9,3,9]
solve(arr,3)