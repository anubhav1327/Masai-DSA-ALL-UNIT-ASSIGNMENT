// 2D Array and Sum 
// Description
// You are given an arraymatrixofnrows andmcolumns which contains positive integers and 
// sums.
// You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z )
//  whose sum is equal to s appear horizontally, vertically and diagonally in the given .
// matrix.

// Input
// Input Format
// First line: Three integers n, m and s, where n denotes the number of rows, m denotes 
// the number of columns in the matrix and s is the sum.
// Next n lines: Each line contains m characters which contain positive integers only.

// Constraints
// 1 <= n,m < 10
// 1 <= s <= 50

// Output
// Print the number of times the sum s appear in the matrix.

// Sample Input 1 

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// here s is 6 presents 4 times( 2 Horizontal + 1 Vertical + 1 Diagonal)

var count=0,M=3,N=3,sum=6
var arr=[[3,2,1],[2,2,2,],[1,5,1]]
for(var i=0;i<N;i++){
    for(var j=0;j<M;j++){
        if(j<M-2){
           var temp=arr[i][j]+arr[i][j+1]+arr[i][j+2]
           if(temp==sum){
               count++
           }
        }
        if(i<N-2){
            var temp=arr[i][j]+arr[i+1][j]+arr[i+2][j]
            if(temp==sum){
                count++
            }
        }
        if(i<N-2 && j<M-2){
            var temp=arr[i][j]+arr[i+1][j+1]+arr[i+2][j+2]
            if(temp==sum){
                count++
            }
        }
        if(i>=3 && j<M-3){
            var temp=arr[i][j]+arr[i-1][j+1]+arr[i-2][j+2]
            if(temp==sum){
                count++
            }
        }

    }
}
console.log(count)