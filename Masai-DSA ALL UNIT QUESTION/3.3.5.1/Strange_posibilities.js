// Dr. Strange and Possibilities 
// Description
// Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time
//  stone to calculate all the possible subsets using the given n integers. 
// Generate all the possible subsets.

// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).

// Output
// Print each possible subset in a new line.
// Elements within the set must be in non-decreasing order. All the subsets must be
//  distinct and sorted in ascending order or lexicographically. For an empty subset just
//  print a blank line.

// Sample Input 1 
// 3
// Sample Output 1
// 1 
// 1 2 
// 1 2 3 
// 1 3 
// 2 
// 2 3 
// 3 



// function strange(arr,pos,N){
//     console.log(arr.join(" "))
//     for(var i=pos;i<N;i++){
//         arr.push(i+1)
//         strange(arr,i+1,N)
//         arr.pop()
//     }
// }
// strange([],0,3)

// function strange(arr,N,pos){
//     if(arr.length!=0){
//         console.log(arr)
//     }
//     for(var i=pos+1;i<=N;i++){
//         strange(arr+i+" ",N,i)
//     }
// }


// strange([],4,0)

// 1 
// 1 2   
// 1 2 3 
// 1 3
// 2
// 2 3
// 3 


