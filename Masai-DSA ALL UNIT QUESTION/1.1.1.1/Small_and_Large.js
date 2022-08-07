// Smallest and Largest of all 
// Description
// Given an array,arr which has N integers.
// You need to print the smallest and largest element present in the array each on new 
// lines.

// Input
// Input Format
// The first line contains an integer N.
// The second line contains N space separated integers, which are integers of array arr.

// Constraints
// 1 <= N <= 100


// Output
// Output Format
// One first line, print minimum of all elements.
// On the second line, print the maximum of all elements.

// Sample Input 1 
// 4
// -2 0 8 4

// Sample Output 1
// -2
// 8

// Hint
// Integers in array are:-[-2, 0, 8, 4]

// Minimum integer in array[-2, 0, 8, 4]is-2

// Maximum integer in array[-2, 0, 8, 4]is-8

 let arr=[2, 4, -8, 4,90,67,0,4,89,-1]
function MinMax(arr){
    arr.sort(function(a,b){return a-b});
    console.log(arr[0])
    console.log(arr[arr.length-1])
}
MinMax(arr)


// function MinMax(arr){
//     let min=arr[0];
//     let max=arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     console.log(min)
//     console.log(max)
// }
// MinMax(arr)


// function minMax(arr){
//     for(var j=0;j<arr.length;j++){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i];
//             arr[i]=arr[i+1];
//             arr[i+1]=temp
//         }
//     }
// }
// console.log(arr[0])
// console.log(arr[arr.length-1])
// }
// minMax(arr)