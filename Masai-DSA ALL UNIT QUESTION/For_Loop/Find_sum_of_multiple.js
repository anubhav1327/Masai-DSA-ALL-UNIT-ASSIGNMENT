// Find Sum of Multiples 
// Description
// You are given three integers: X, K, Y.
// You have to print the sum of first K multiples of N, on a condition that it should
//  be divisible by Y. 

// Input
// Input Format :

// The input line contains 3 spaced integers which are n, k and y.
// Constraints :

// 1 <= n <= 1000
// 1 <= y <= 1000
// 1 <= k <= 10^4

// Output
// Output the sum as mention in problem description.

// Sample Input 1 

// 3 10 5
// Sample Output 1

// 45
// Hint

// Output Explanation :

// For the sample input, X = 3, K = 10 and Y = 5

// First K multiples of X are (First 10 multiples of 3):- 3 6 9 12 15 18 21 24 27 30

// Numbers from above which are visible by Y (i.e 5) are:-  15, 30.

// Sum of numbers divisible by 15 and 30 is 15+30 = 45.

var sum=0
var K=10,X=3
for(var i=1;i<=K;i++){
  
    if((i*X)%5==0){
        sum+=i*X
    }
}
    console.log(sum)

