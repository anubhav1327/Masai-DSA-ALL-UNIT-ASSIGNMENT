// Ways to sum N 
// Description
// Given an integer N. In how many ways you can add numbers 1, 2, and, 5 such that the
//  summation equals N. (Check sample input for more clarity)

// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Single integer denoting the value of N.

// Constraints:
// 1 <= T <= 100
// 1<= N <= 30

// Output
// For each test case, print in a new line, a single integer denoting the required number
//  of ways.

// Sample Input 1 
// 1
// 5

// Sample Output 1
// 9

// Hint
// No of the ways for N=5 are:-
// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 1 + 1 + 2 + 1
// 1 + 2 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 2 + 2
// 2 + 1 + 2
// 2 + 2 + 1
// 5

function ways(N){
    if(N<0){
        return 0
    }if(N==0){
        return 1
    }
    return ways(N-1)+ways(N-2)+ways(N-5)
}
console.log(ways(5))