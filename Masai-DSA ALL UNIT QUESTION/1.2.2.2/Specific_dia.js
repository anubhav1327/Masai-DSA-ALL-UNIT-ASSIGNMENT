// Specific Diagonals 
// Description
// Given a matrix of R rows and C columns which contains distinct integers and you are 
// given a integer K and you need to print both the diagonals crossing 
// through the given element K, you can always assume that the given element always 
// exist in the matrix

// In this 4*4 Matrix, suppose we need to print the diagonals passing from 11,
//  So the output will be :

// 1 6 11 16
// 8 11 14

// Note: You need to print the diagonal from top to bottom also make sure you print the 
// diagonals going from left to right first then diagonal going right to left,on a new lines.

// Input
// The first line of input will contain two integers R and C , denoting the Rows and 
// Columns of the Matrix.

// Next R (rows) lines contain C integers each denoting the matrix elements.

// The next line will contain an integer K, denoting the element for which we need to 
// print the diagonals.

// Constraints:
// 1<= R, C <= 100
// 1<= Matrix[i][j] <= 10^4
// 1<= K <= 10^4

// Output
// Output both the diagonals containing the given element , print both the diagonals in 
// a new line and fromtop to bottomorder.

// Check Hint for better understanding.

// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 6
// Sample Output 1

// 2 6
// 6 8
// Sample Input 2 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 5
// Sample Output 2

// 1 5 9
// 3 5 7
// Hint

// In Sample 1:
// R = 3, C = 3

// we need to print the diagonals of 6, also we are printing diagonals from top to bottom
//  and left to right first then right to left , So output will be
// 2 6 -> left to right diagonal and from top to bottom order
// 6 8 -> right to left diagonal and from top to bottom order

// For Sample 2.
//Top Left to Bottom Right diagonal elements are 1 5 6.
// Top Right to Bottom Left diagonals elements are 3 5 7.
// So we print
// 1 5 6
// 3 5 7 on new lines.

function specific_dia(arr,N,M,K){
    var r1=-1;
    var c1=-1
    for(var i=0;i<N;i++){
        for(var j=0;j<M;j++){
            if(arr[i][j]==K){
                r1=i
                c1=j
                break
            }

        }
        if(r1!=-1 && c1!=-1){
            break
        }
    }
    var r2=r1;
    var c2=c1
    while(r2>0 && c2>0){
        r2--
        c2--
    }
    var topLeftI=r2
    var topleftJ=c2
    var leftRigthtDia=""
    while(topLeftI<N && topleftJ<M){
        leftRigthtDia+=arr[topLeftI][topleftJ]+" "
        topLeftI++
        topleftJ++
    }
    console.log(leftRigthtDia)
    r2=r1;
    c2=c1;
    while(r2>0 && c2<M-1){
        r2--
        c2++
    }
    var topRightI=r2
    var topRightJ=c2
    var rightLeftDia=""
    while(topRightI<N && topRightJ>=0){
        rightLeftDia+=arr[topRightI][topRightJ]+" "
        topRightI++
        topRightJ--
    }
    console.log(rightLeftDia)

}
var N=3,M=3,K=5
var arr=[[1,2,3],[4,5,6],[7,8,9]]
specific_dia(arr,N,M,K)