// Mod of 10 II
// Description
// You are given a number stored in a variable with the namenum
// Find out the value obtained from the expressioni % 10, whereiconsists of all the values 
// from 1 to the value stored innum, includingnum

// Input
// The first and the only line of the input contains the value stored innum

// Output
// Print the value obtained after doing the operation,i % 10, whereirefers to all the
//  values from 1 to the number stored innum, including that as well

// Note : Print all the values on a new line
// Sample Input 1 
// 7

// Sample Output 1
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// Hint
// In the sample test case, the value stored in the variablenum = 7
// All the values in the range from 1 to 7 are put in the expression i % 10, such that
// 1 % 10 = 1
// 2 % 10 = 2
// 3 % 10 = 3
// 4 % 10 = 4
// 5 % 10 = 5
// 6 % 10 = 6
// 7 % 10 = 7

// Therefore, the required output is
// 1
// 2
// 3
// 4
// 5
// 6
// 7


function loop(N){
    for(var i=1;i<=N;i++){
    console.log(i%10)
    }
}
loop(7)
