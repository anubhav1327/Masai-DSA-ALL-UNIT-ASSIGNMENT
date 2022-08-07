// Sum of 2D Array 
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the sum of all elements of the 2D array

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 + 2 + 3 + 4 + 5 + 6 = 21, which is the required output


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the sum of all elements present in the 2D Array

// Sample Input 1 

// 3 2
// 1 2
// 3 4 
// 5 6
// Sample Output 1

// 21
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 + 2 + 3 + 4 + 5 + 6 = 21, which is the required output


function sum(N,M,arr){
    sum=0
    for(var i=0;i<N;i++){
        for(var j=0;j<M;j++){
            sum+=arr[i][j]
        }
    }
    console.log(sum)
}
let arr=[[1,2],[3,4],[5,6]]
sum(3,2,arr)