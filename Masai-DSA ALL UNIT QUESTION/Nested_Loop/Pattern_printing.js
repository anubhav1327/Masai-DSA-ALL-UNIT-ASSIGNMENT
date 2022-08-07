// Pattern Printing 
// Description
// You are given a number, stored in a variable with the nameN
// Print the pattern as shown below.
// If the value stored inN = 4, then the pattern required will be

// *
// **
// ***
// ****

// Input
// The first and the only line of each test case contains the value stored in the
//  variable N

// Output
// Print the pattern as shown in the problem statement

// Sample Input 1 
// 2
// Sample Output 1
// *
// **
// Sample Input 2 

// 1
// Sample Output 2

// *
// Hint

// In the first sample test case, the value stored inN = 2

// Therefore, as shown in the problem statement, the required pattern will be

// *
// **
// In the second sample test case, the value stored inN = 1

// Therefore, as shown in the problem statement, the required pattern will be

// *


for(var i=0;i<5;i++){
    str=""
    for(var j=0;j<=i;j++){
        str+="* "
    }
    console.log(str)
}