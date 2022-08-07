// Apply Basic Maths 
// Description

// You are given an array A with N elements. You are allowed to remove only one element,
//  which makes the sum of all the remaining elements exactly divisible by 7.

// Your task is to find the first index of smallest element that can be removed from array. 
// If there is no answer print -1.


// Input
// Input Format

// The first line contains a single integer 

// Next line contains N space separated integers A[k] , (0 <= k < N).

// Constraints

// 1 <N< 100000
// 0 <A[k]< 1000000000

// Output
// Output Format

// Print a single line containing one integer, the first array index of the smallest
//  element that CAN be removed, and -1 if there is no such element that he can remove!

// Sample Input 1 
// 5
// 14 7 8 2 4
// Sample Output 1
// 1
// Hint

// Sample 1 Explanation

// Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index 
// is 1.

// function applySum(N,A){
//     var i=0,j=0,s=0,num=10**5
//     while(i<N){
//         s=0
//         j=0
//         while(j<N){
//             if(j==i){
//                 j++
//                 continue
//             }else{
//                 s+=A[j]
//             }
//             j++
//         }
//         if(s%7==0){
//             if(A[i]<num){
//                 num=A[i]
//             }
//         }
//         i++
//     }
//     console.log(A.indexOf(num))
// }

// applySum(5,[14,7,8,2,4])


// function solve(arr,k){
//     let sum=0,flag=0
//    let mx=10000;
//    let ind;
//     for(var i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
   
//     for(let j=0;j<arr.length;j++){
//         let p=sum-arr[j]
//         if(p%k==0 ){
//         if(arr[j]<mx){
//             mx=arr[j];
//             ind=j
//             flag=1

           
//         }
//     }
// }
//  if(flag)
// console.log(ind)
// else console.log("-1")
   
// }
// solve([14,8,2,4,7],7)



// * int size // size of the input array
// * int[] a //input array
// * int min = Infinity
// * int ans = -1
// * for (int i=0;i<size;i++)
//     * int temp = 0;
//     * for (int j  0;j<size;j++)
//         * if (i != j) temp += a[j]
//     * if (temp % 7 == 0 && a[i]<min) min = a[i], ans = i
// * print ans



















