// Enough Fuel Consumption 
// Description
// You are given two numbers, stored in the variable with the following names
// fuel, distance
// Find the value of required, such that
// required = fuel*distance 

// If the value ofrequiredis greater than 50, printEnough, else printGo On

// Input
// Input Format

// The first and the only line of input contains two values, stored in variablesfuel,
//  distance

// Constraints

// Both numbers < 1000


// Output
// Output the correct statement based on the conditions mentioned in the problem statement.


// Sample Input 1 

// 1 46
// Sample Output 1

// Go On
// Hint

// In the sample test case, the value stored infuel = 1, and the value stored indistance = 46

// Therefore, the value ofrequired = fuel * distance = 1 * 46 = 46, which is less than 50, hence the outputGo On


var fuel=1;
var distance=46
var required=fuel*distance

if(required>50){
    console.log("Enough!")
}else{
    console.log("Go On")
}