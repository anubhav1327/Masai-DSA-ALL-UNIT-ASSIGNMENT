// Cube and Square
// Description
// You are given two numbers n and m, you need to check if cube of n is greater than 
// square of m.

// Input
// First line contains two space separated integers n and m.

// Output
// Print true if cube of n is greater than square of m, or else print false.

// Sample Input 1 
// 2 3
// Sample Output 1
// false
// Hint

// In the given sample test case n = 2 and m = 3 , so cube of n is 2*2*2 =8 and 
// square of m is 3*3 = 9

// Here cube of n is  lessthan square of m.

// Therefore Output is false

var a=2,b=3;
num1=a**3
num2=b**2

if(num1>num2){
    console.log("true")
}else{
    console.log("false")
}