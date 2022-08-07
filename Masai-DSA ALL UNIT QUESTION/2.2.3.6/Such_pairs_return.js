// Such Pair Returns
// Description

// For each test case, you are given N integers and K, your task is to write a program 
// that prints "1" (without quotes) if there are 2 integers present in the array whose 
// sum is K. Else print "-1" (without quotes).


// Input
// 10^6Input Format :

// First line contains T, no of test cases.

// First line of each test case contains 2 space separated integers: N & K

// Second line of each test case contains **N** space separated integers

// Constraints :

// 1 <= T <= 10

// 1 <= N <=1000000

// 1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6

// Output
// Output 1/-1 depending on the condition for each test case on new line

// Sample Input 1 

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1

function solve(arr,k){
    arr.sort(function(a,b){return a-b});
    let l=0;
    let r=arr.length-1
    while(l<r){
        if(arr[l]+arr[r]==k){
            return 1
        }else if(arr[l]+arr[r]<k){
            l++
        }else{
        r--
        }
    }
    return -1
}
let arr=[3,4,0,2,7],k=8
console.log(solve(arr,k))