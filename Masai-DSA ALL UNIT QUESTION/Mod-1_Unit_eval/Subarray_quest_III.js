// Sub array quest III 
// Description

// Given an array A with N positive integers. Count the number of subarrays that start with an
//  even number and end with an odd number.

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

// 3
// Hint

// Given test cases,

// Test 1:
// N = 5.
// A: 1 2 3 4 5.
// The following subarrays start with even and end with odd number:
// 1. 2 3
// 2. 2 3 4 5
// 3. 4 5


// Hence the answer is 3.
function solve(arr){
    var count=0
    for(var i=0;i<arr.length;i++){
        let s=""
        for(var j=i;j<arr.length;j++){
            s+=arr[j];
            if(s[s.length-1]%2==1 && s[0]%2==0){
                count++;
            }
        }
    }
    console.log(count)
}
solve([1,2,3,4,5])