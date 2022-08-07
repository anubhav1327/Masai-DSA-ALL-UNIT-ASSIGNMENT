// Pattern of N 
// Description

// You are given a number stored in a variable with the name N

// You have to print all the numbers in the range from1 to N*N, such that there are exactlyNnumbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9

// Input
// The first and the only line of the input contains the value stored in the variableN


// Output
// Print all the numbers in the range from [1, N*N], as shown in the problem statement, such that there areNnumbers on each line


// Sample Input 1 

// 4
// Sample Output 1

// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12 
// 13 14 15 16 
// Hint

// In the sample test case, the value stored atN = 4. Therefore, all the values in the range from[1,16]need to be printed.

// Also, there should be 4 elements on each line. Therefore, the output becomes

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

for(let i=0;i<4;i++){
   let str=""
  for(let j=0;j<4;j++){
           str+=j+i+1+" "
  }
  console.log(str)
}