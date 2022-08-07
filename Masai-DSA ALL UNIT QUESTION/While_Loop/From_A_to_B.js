// From A to B Ended
// Description

// You are given two numbers, stored in variables with the following names

// max, min

// You have to print all the numbers from min to max, excluding max. 
// Print each number on a new line
// For example, if the value stored inmax = 19, and the value stored in min = 14,
//  then the output will be
// 14
// 15
// 16
// 17
// 18

// Note : The value stored in max will always be greater than or equal to min
// Input
// The first and the only line of input contains the value stored inmax, minrespectively


// Output
// Print all the values from min to max, excluding max. Print each number on a new line


// Sample Input 1 

// 19 13
// Sample Output 1

// 13
// 14
// 15
// 16
// 17
// 18
// Hint

// In the sample test case, the value stored inmax = 19, and the value stored inmin = 13

// Therefore, all the values from13 to 19are printed, excluding 19, as explained in the problem statement

// Therefore, the answer becomes

// 13
// 14
// 15
// 16
// 17
// 18

function minMax(min,max){
  
    while(min<max){
        console.log(min) 
        min++
    }
    
}
minMax(13,19)