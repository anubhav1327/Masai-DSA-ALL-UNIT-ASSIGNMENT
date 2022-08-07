// Z Traversal 
// Description
// Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure
//  given below for better understanding.

// Input
// The first line of the input contains T, the number of test cases. The first line of each test
//  case contains N, the dimension of the square matrix.

// Next N lines contains N space separated integers, denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000

// Output
// For each test case, print the elements that occur in the Z traversal of the matrix, on a new
//  line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 5 7 8 9 
function solve(arr){
    let str=""
    for(var i=0;i<3;i++){
        str+=arr[0][i]+" ";
    }
    var r=1;
    var col=arr.length-2;
    while(r<arr.length-1 && col>0){
        str+=arr[r][col]+" "
        r++;
        col--
    }

    for(var j=0;j<arr.length;j++){
        str+=arr[arr.length-1][j]+" "
    }
    console.log(str)   

}

let arr=[[1,2,3],[4,5,6],[7,8,9]]
solve(arr)