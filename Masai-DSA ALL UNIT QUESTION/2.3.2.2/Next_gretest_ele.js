// Next Greater Element 
// Description

// Given an array of N elements, find the next greater element for each element in the
//  array, print -1 if it does not exits. Refer to the sample I/O for better understanding

// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array.
//  The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= A[i] <= 10000

// Output
// For each test case, print N space separated integers, denoting the next greater 
// element for each element,  on a new line.

// Sample Input 1 

// 1
// 4
// 1 3 2 4
// Sample Output 1

// 3 4 4 -1
// Hint

// In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1.

// function solve(arr){
//     let sum="",st=""
//     for( let i=0;i<arr.length;i++){
//          for(var j=i;j<arr.length;j++){
//             if(arr[j]>arr[i]){
//                 sum=arr[j]
//                 break
//             }else{
//                 sum="-1 "
               
//             }
//         }
//         st+=sum+" "
        
        
//     }
//     console.log(st)
  
// }
// solve([1,3,2,4])


function Next_Greater_Element(arr,N){
    arr.reverse();
    var stk=[];
    var newStk=[];
     for(var i=0;i<N;i++){
     while(stk.length>0 && stk[stk.length-1]<=arr[i]){

            stk.pop()
     }
        if(stk.length==0){
            newStk.push(-1)
        }else{
            newStk.push(stk[stk.length-1])
        }
        stk.push(arr[i])
       
    }
     console.log(newStk.reverse().join(' '))
}

let arr=[1,3,2,4],N=4;
Next_Greater_Element(arr,N)