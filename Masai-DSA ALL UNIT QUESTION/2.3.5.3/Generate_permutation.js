// Generate Permutations 
// Description
// Given a collection of numbers, return all possible permutations.
// NOTE:
// No two entries in the permutation sequence should be the same.
// For the purpose of this problem, assume that all the numbers in the collection are 
// unique.
// USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION

// Input
// Input Format :
// The first line of input contain an integer n - denoting the size of array
// The next line contain n distinct integers, A[1],A[2]...A[N]

// Constraints :
// 1<= n <=6

// Output
// Print the permutations of numbers in new line seperated by space, also make sure the 
// permutations are printed in sorted order that is "1 2 3" must come before "2 3 1".
//  Print without quotes. See sample test case for better understanding.

// Sample Input 1 
// 3
// 1 2 3

// Sample Output 1
// 1 2 3 
// 1 3 2 
// 2 1 3 
// 2 3 1 
// 3 1 2 
// 3 2 1



// function permute(arr){
//     var res=[]
//     if(arr.length==0)return
//     if(arr.length==1) return arr
//     for(var i=0;i<arr.length;i++){
//         var curr=arr[i];
//         var per=arr.slice(0,i).concat(arr.slice(i+1))
//         var per1=permute(per)
//         for(var j=0;j<per1.length;j++){
//             var perArr=[curr].concat(per1[j])
//             res.push(perArr)
//         }
//     }
//     return res
// }

// var res=[]
// var arr=[1,2,3]
// res=permute(arr)
// for(var i=0;i<res.length;i++){
//     console.log(res[i].join(" "))
// }




