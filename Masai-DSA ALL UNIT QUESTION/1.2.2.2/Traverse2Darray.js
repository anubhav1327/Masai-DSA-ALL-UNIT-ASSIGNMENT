// Traverse a 2D Array
// Description
// You are given a 2D array(matrix), of N rows and M columns.
// You need to print elements of array as shown in the diagram, on a single line.

// For example, for the above matrix, the required output would be as shown below.
// 4 3 2 1 5 6 7 8 12 11 10 9

// Input
// First line contains two integers N and M, no of rows and columns of matrix.
// Next N lines contains M space separated integers which are elements of matrix.

// Constraints
// 1 <= N*M <= 10^6
// 1 <= A[i][j] <= 100

// Output
// Print all elements of matrix on single line, in the order shown in diagram.

// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
// Sample Output 1

// 4 3 2 1 5 6 7 8 12 11 10 9

var s="", M=3,N=4
var arr=[[1,8,9],[2,7,10],[3,6,11],[4,5,12]]
for(var i=0;i<M;i++){
    for(var j=N-1;j>=0;j--){
        s+=arr[j][i]+" "
    }
}
console.log(s)