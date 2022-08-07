// Average-of-all 
// Description
// You are given an arr which has N integers.
// Write a program to print the ceil of average of integers present in the array.
// Note:- The ceil value of given whole number K is the smallest integer value greater or 
// equal to a K.

// For example:-
// if the value of K = 3.679, the ceil value of K is 4.
// if the value of K = 5, the ceil value of K is 5.

// Input
// Input Format :
// First line contains N, which is the number of elements present in array.
// Second line contains N space separated integers, which are elements of array.

// Constraints :
// 1 <= n <= 100

// Output
// You need to output ceilof the average of numbers present in array.

// Sample Input 1 
// 4
// 2 5 0 9

// Sample Output 1
// 4

// Hint
// Output Explanation :
// N here is 4.
// So, you are getting 4 elements in the array.
// The sum of elements of array is 2 + 5 + 0 + 9 = 16.
// Average of elements of array is 16/4 = 4.
// The ceil of average of elements of array is 4.

// let arr=[7,9, 2, 5, 0, 9,9]
// function Avg(arr){
//     sum=0
//     for(var i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     let avg=Math.ceil(sum/arr.length)
//     console.log(avg)
// }

// Avg(arr)