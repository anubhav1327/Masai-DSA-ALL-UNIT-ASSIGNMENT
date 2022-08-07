// Range of 2 
// Description
// You are given two numbers, stored in the variable with the namesleft, right respectively
// You have to print all the numbers in the range of [left, right],(including the values
//  stored in left and right) such that the current number is double of the previous number
// For example, consider the value stored in left = 2, and the value stored in right = 10,
//  then the required output will be
// 2
// 4
// 8
// We, start from 2, and double the value so we get 4, and the value is further doubled,
//  so the value becomes 8. The next value in the series will be 16, but since it is
//  greater than the value stored atright = 10, we do not consider it

// Input
// The first and the only line of the input contains the value stored in,leftandright 
// respectively.

// Output
// Print all the values between,[left, right], as shown in the problem statement

// Sample Input 1 
// 4 10

// Sample Output 1
// 4 
// 8

// Hint
// In the sample test case, the value stored atleft = 4, andright = 10.
//  Therefore, we start withleft = 4, and double the value, so we get8. The value is
//  further doubled, so we get16. But, this value is greater than the value stored in 
// right = 10, so we stop at this point. Hence, the output becomes
// 4
// 8

function range(l,r){
    for(var i=l;i<=r;i*=2){
        console.log(i)
    }
}
range(2,80)