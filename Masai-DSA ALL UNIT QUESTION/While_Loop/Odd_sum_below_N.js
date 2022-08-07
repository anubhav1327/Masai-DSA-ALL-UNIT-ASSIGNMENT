// Odd Sum Below N
// Description
// You are given a number, stored in a variable with the namenum
// Find the sum of all odd numbers, greater than 0, and less than or equal to the value 
// stored innum
// Finally, print the sum
// For example, if the value stored innum = 5
// Then, all the odd numbers smaller than 5, will be
// 1
// 3
// 5
// Therefore, the sum becomes,sum = 1 + 3 + 5 = 9, which is the required output

// Input
// The first and the only line of the input contains the value stored innum

// Output
// Find the sum of all the odd numbers greater than 0, and less than or equal to the 
// value stored innum, and print it

// Sample Input 1 
// 7
// Sample Output 1

// 16
// Hint

// In the sample test case, the value stored innum = 7. Therefore, all the odd numbers, smaller than or equal to 7, and greater than 0, are

// 1
// 3
// 5
// 7
// Therefore, the sum becomes,1 + 3 + 5 + 7 = 16, which is the required output


function loop(N){
    sum=0
    for(var i=1;i<=N;i+=2){
        sum+=i
    }
    console.log(sum)
}
loop(7)