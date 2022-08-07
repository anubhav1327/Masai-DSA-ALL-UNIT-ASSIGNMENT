// Pair less than K
// Description
// You are given an array A of N integers, and an integer K. Find the maximum value of S,
//  such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.

// Refer the sample test case for better understanding.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the number of elements in the array.
// The next line contains N space separated integers, denoting the values in the array.
// The next line contains the value K.

// Constraints
// 1 <= T <= 10
// 1 <= N <= 10^4
// 1 <= A[i] <= 10^4

// Output
// Print the maximum value of S, according to the conditions given in the problem
//  statement, on a new line.

// Sample Input 1 
// 2
// 5
// 1 2 3 4 5
// 7
// 3
// 30 10 20
// 15
// Sample Output 1
// 6
// -1
// Hint

// In the sample test case, in the first test case, the value of K is 7. The value of S, 
// when i = 0, and j = 4, is 6, which is less than K, and largest possible value satisfying 
// all the constraints. Therefore, the output is 6.

// In the second test case, no possible value of S exists which satisfies all the required 
// conditions, therefore the output is -1.

function solve(arr,k){
    arr.sort(function(a,b){return (a-b)});
    let l=0,sum=-1;
    let r=arr.length-1;
    while(l<r){
        if(arr[l]+arr[r]<k){
            sum=arr[l]+arr[r]
            l++
        }else{
            r--
        }
    }
    console.log(sum)
}
let arr=[30,10,20];
let k=15
solve(arr,k)