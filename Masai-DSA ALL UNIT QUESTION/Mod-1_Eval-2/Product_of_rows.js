// Product of Rows 
// Description
// You are given a 2D array, whose dimensions are stored in two variables with the name
// N and M
// The value stored in N denotes the number of rows, and the value inMdenotes the number
//  of columns
// The 2D array is stored in a variable with the name arr
// You have to print the product of all elements in a row, on a new line
// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1  (the elements of the row [1,2])
// 12 (the elements of the row [3,4])
// 30 (the elements of the row [5,6])


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the product of each row, on a new line. You have to do this for all rows of the matrix

// Sample Input 1 

// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1

// 2
// 12
// 30
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be
// 1  (the elements of the row [1,2])
// 12 (the elements of the row [3,4])
// 30 (the elements of the row [5,6])

function product_row(arr,N,M){
    
    for(var i=0;i<N;i++){
        sum=1
        for(var j=0;j<M;j++){
            sum*=arr[i][j]
        }
        console.log(sum)
    }
}
let arr=[[1,2],[3,4],[5,6]]
product_row(arr,3,2)
