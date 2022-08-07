// Compare two Numbers
// Description
// You are given two numbers stored in two variables, with the name,num1 and num2

// Print the result of the following operations

// 1. num1 > num2 -> this operation prints true, if num1 is greater than num2, otherwise
//  it prints false
// 2. num1 < num2 -> this operations prints true, if num1 is smaller than num2, 
// otherwise it prints false
// 3. num1 == num2 -> this operation print true, if num1 is equal to num2, 
// otherwise it prints false
// You have to print the result of three operations in the order as shown above

// Input
// The first and the only line of input contains the values stored innum1andnum2

// Output
// Print the result of three operations, one by one, on a new line

// Sample Input 1 

// 4 16 
// Sample Output 1

// false
// true
// false
// Hint

// In the sample test case, the value stored innum1 = 4and value stored innum2 = 16

// In the first operationnum1 > num2, 4 is not greater than 16, so we get the output asfalse

// In the second operationnum1 < num24 is lesser than 16, so we get the output astrue

// In the third operationnum1 == num2, num1 is not equal to num2, so we get the output asfalse


var num1=4;
var num2=16
if(num1>num2){
    console.log("true")
}else{
    console.log("false")
}if(num1<num2){
    console.log("true")
}else{
    console.log("false")
}if(num1==num2){
    console.log("true")
}else{
    console.log("false")
}