// Sum of Indexes 
// Description
// You are given a 2D array, whose dimensions are stored in two variables with the
//  name N and M

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the sum of indexes of the 2D array for all positions in the 2D array

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// At index (0,0), the sum of indexes becomes (0 + 0 = 0)
// At index (0,1), the sum of indexes becomes (0 + 1 = 1)
// At index (1,0), the sum of indexes becomes (1 + 0 = 1)
// At index (1,1), the sum of indexes becomes (1 + 1 = 2)
// At index (2,0), the sum of indexes becomes (2 + 0 = 2)
// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes 

// 0 1
// 1 2
// 2 3


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the sum of indexes for all positions in the 2D array, as shown in the problem statement

// Sample Input 1 

// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1

// 0 1
// 1 2
// 2 3
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// At index (0,0), the sum of indexes becomes (0 + 0 = 0)
// At index (0,1), the sum of indexes becomes (0 + 1 = 1)
// At index (1,0), the sum of indexes becomes (1 + 0 = 1)
// At index (1,1), the sum of indexes becomes (1 + 1 = 2)
// At index (2,0), the sum of indexes becomes (2 + 0 = 2)
// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes 

// 0 1
// 1 2
// 2 3


for(var i=0;i<3;i++){
    sum=""
    for(var j=0;j<3;j++){
        sum+=(i+j)+" "
    }
    console.log(sum)
}