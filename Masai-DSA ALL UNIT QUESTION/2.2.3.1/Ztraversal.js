// Z Traversal 
// Description
// Given a square matrix of size N x N. Print the Z traversal of the matrix.

// Input
// The first line of the input contains T, the number of test cases. The first line of 
// each test case contains N, the dimension of the square matrix.

// Next N lines contains N space separated integers, denoting the values of the matrix.

// Constraints
// 1 <= T <= 10
// 1 <= N <= 500
// 1 <= A[i][j] <= 1000

// Output
// For each test case, print the elements that occur in the Z traversal of the matrix, 
// on a new line.

// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1
// 1 2 3 5 7 8 9 


var arr=[[1,2,3],[4,5,6],[7,8,9]]
var s=""
for(var i=0;i<arr.length;i++){
    s+=arr[0][i]+" "
}
var col=arr.length-2;
var row=1;
while(col>=0 && row<=arr.length-1){
    s+=arr[row][col]+" "
    col--
    row++
}
for(var j=1;j<arr.length;j++){
    s+=arr[arr.length-1][j]+" "
}
console.log(s)
