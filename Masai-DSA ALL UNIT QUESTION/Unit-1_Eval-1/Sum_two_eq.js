// Sum Two Equations 
// Description
// You are given two numbers, stored in a variable with the names,a, b
// You have to find the sum of X and Y, such that
// 1. X = (a*5) + (b*3)
// 2. Y = (a*7) + (b*4)
// Find the value of sum, such thatsum = X + Y

// Input
// The first and the only line of the input contains the value stored in thea, b

// Output
// Print the value of the sum, as explained in the problem statement

// Sample Input 1 
// 2 3

// Sample Output 1
// 45
// Hint
// In the sample test case, the value stored ina = 2, b = 3
// The value of
// X = (2*5) + (3*3) = 10 + 9 = 19
// Y = (2*7) + (3*4) = 14 + 12 = 26
// Therefore, the value ofsum = 19 + 26 = 45, which is the required

function equation(a,b){
   let X = (a*5) + (b*3)
   let  Y = (a*7) + (b*4)
    let sum=(X+Y)
    console.log(sum)
}
equation(2,3)