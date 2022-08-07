// 3D Array 
// Description
// You are given a 3D Array, of N layers, M rows, and K columns. You have to take the
//  input, and print the 3D Array in the form as mentioned in the sample test case.

// Input
// The first line of the input contains N, M and K.
// The next line contains N * M * K, integers denoting the elements of the 3D array.

// Constraints
// 1 <= N, M, K <= 10
// 1 <= A[i][j][k] <= 10

// Output
// Print the output as shown in the sample test case.

// Sample Input 1 
// 2 2 2
// 1 2 3 4 5 6 7 8
// Sample Output 1

// 1 2 
// 3 4 
// 5 6 
// 7 8 
// Hint

// In the sample test case, the value of N = 2, M = 2, K = 2. Therefore, we will have to print all the elements on a single row together, one column after the other, on a new line, for each layer.

// var N=2,M=2,K=2
// var arr=[
//     [
//         [1,2],
//         [3,4],
//         [5,6],
//         [7,8]
    
//     ]
// ]

 
// for(var i=0;i<N;i++){
    
//     for(var j=0;j<M;j++){
//        let s=""
//         for(var k=0;k<K;k++){
//             s+=arr[i][j][k]+" "
//         }
    
    
//     console.log(s)
//     }
    
// }
