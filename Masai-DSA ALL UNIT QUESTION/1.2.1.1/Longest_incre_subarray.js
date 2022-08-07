// Longest Increasing Subarray 
// Description
// Given an array arr of n integers.
// You need to find out the length of the longest subarray which is strictly increasing
//  i.e, every element is greater than it's the previous element in that subarray.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number
//  of test cases. Then t test cases follow.
// The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the '
// number of elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).


// Output
// For each test case, print the answer: The length of the longest subarray.

// Sample Input 1 
// 2
// 2
// 1 1
// 6
// 1 2 1 2 3 1

// Sample Output 1
// 1
// 3

// Hint
// For Sample Input 1:-
// Subarrays which are strictly increasing are [1] and [1]. So maximum size of sub-array
//  is 1.
// For Sample Input 2:-
// Subarrays which are strictly increasing are [1,2] , [1,2,3] and [1]. So maximum size 
// of sub-array ([1,2,3]) is 3. So answer is 3.

// function longestSubarray(arr,N){
//     var max=0,count=0
//     for(var i=1;i<N;i++){
//         if(arr[i]>arr[i-1]){
//             count++
//         }else{
//              count=0
//         }
    
//     if(count>max){
//         max=count
//     }
// }
//      console.log(max+1)
    
// }

// longestSubarray([1,2,1,2,3,1,9,14,28,1],11)


//   var arr = []
//   var max = 0
//   if(A.length == 1){
//       max = 1
     
//   }else{
//   for(var i=0;i< A.length;i++){  
//       var a = A[i]
//       var temp = []
//       temp.push(a)
//       for(j = i+1;j < A.length;j++){ 
//           if(a < A[j]){
             
//               temp.push(A[j])
//               a = A[j]
//               if(j == A.length - 1){
//                   arr.push(temp)
//               }
//           }else{
//               if(arr.includes(temp)){
//                   break
//               }else{
//                   arr.push(temp)
//                   break
//               }
              
//           }
         
//       }
     
//   }
//   }

//   for(i = 0;i< arr.length;i++){
//       if(max < arr[i].length){
//           max = arr[i].length
//       }
//   }
//   console.log(max)



