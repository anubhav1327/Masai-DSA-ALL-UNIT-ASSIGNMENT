// Sum Related Problem 
// Description
// You are given a number N, you need to find sum of all the even numbers which are less
//  than or equal to N.

// Input
// Input Format
// First and the only line contains one number N.

// Constraints
// 1 <= N <=10000


// Output
// Output Format
// Output sum of all even number which are less than equal to N.


// Sample Input 1 
// 4

// Sample Output 1
// 6

// Sample Input 2 
// 3

// Sample Output 2
// 2

// Hint
// Numbers less than or equal to 4 are :- [1 2 3 4]
// Even Numbers less than or equal to 4 are :- [2 4], whose sum is 2 + 4 = 6.
// Numbers less than or equal to 3 are :- 1 2 3
// Even Numbers less than or equal to 4 are :- [2], whose sum is 2.


// function sum(N){
//     s=0
//     for(var i=1;i<=N;i++){
//         if(i%2==0){
//             s+=i
//         }

//     }
//     console.log(s)
// }

// sum(6)

// function sum(N){
//     s=0
//     for(var i=2;i<=N;i+=2){
//         s+=i

//     }
//     console.log(s)
// }

// sum(16)