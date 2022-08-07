// Sub array quest
// Description
// Given an array A with N positive integers. Count the number of subarrays that start 
// and end with an odd number.

// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Single integer denoting the value of N.
// Next line: N single space-separated integers denoting the elements of array A.

// Constraints:
// 1 <= T <= 100
// 1 <= N<= 100
// Any array elements is not greater than 100.

// Output
// For each test case, print in a new line, a single integer denoting the number of subarrays.

// Sample Input 1 
// 1
// 5
// 1 2 3 4 5

// Sample Output 1
// 6
// Hint
// Given test cases,

// Test 1:
// N = 5.
// A: 1 2 3 4 5.
// The following subarrays start and end with odd numbers:
// 1. 1 2 3
// 2. 1 2 3 4 5
// 3. 3 4 5
// 4. 1
// 5. 3
// 6. 5

// Hence the answer is 6.

// function subarray(arr){
//     let count=0
//     for(var i=0;i<arr.length;i++){
//         str="" 
       
//         for(var j=i;j<arr.length;j++){
//             str+=arr[j]
//             if(str[0]%2==1 && str[str.length-1]%2==1){
//                 count++
//             }
//     }
// }
// console.log(count)
// }
// let arr=[1,2,3,4,5]
// subarray(arr)