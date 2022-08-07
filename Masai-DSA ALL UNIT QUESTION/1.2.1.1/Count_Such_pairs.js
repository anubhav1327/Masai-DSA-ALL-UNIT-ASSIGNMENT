// Count such pairs
// Description
// You are given an array A of N integers along with a target integer K.
// Your task is to find out the number of pairs of integers present in the array, 
// whose sum is equal to the target value K.

// Input
// Input Format :
// First line contains 2 integers: N and K.
// Second line contains N space separated integers which are the elements of the array.

// Constraints :
// 1 <= N <= 100

// Output
// Print the count of such pairs whose sum is K.

// Sample Input 1 
// 5 9
// 3 0 6 2 7

// Sample Output 1
// 2
// Hint
// Pairs whose sum is 9 are:- {3,6} , {2, 7}. So answer is 2.




// function count_pairs(N,K,arr){
//     count=0
//     for(var i=0;i<arr.length;i++){
//         for(var j=i+1;j<arr.length;j++){
//           if(arr[i]+arr[j]==K){
//           count++
//         }
//     }
// }
//     console.log(count)
// }
// let arr=[3, 0, 6, 2, 7,9]
// count_pairs(6,9,arr)



function Count_pairs(K,arr){
    arr.sort(function(a,b){return a-b})
    var l=0;
    var r=arr.length-1
    var count=0
    while(l<=r){
        if(arr[l]+arr[r]==K){
            count++
        } if(arr[l]+arr[r]<K){
            l++
        }else{
            r--
        }
    }
    console.log(count)
    
}
 let arr=[3, 0, 6, 2, 7]
Count_pairs(9,arr)