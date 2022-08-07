// Move 2 Ahead II 
// Description
// You are given a number stored in a variable with the following name,num
// You have to print all the even numbers greater than zero, and less than or equal to 
// the value stored innum
// For example, if the value stored innum = 13, then the output will be
// 2
// 4
// 6
// 8
// 10
// 12
// Note : All the values need to be printed on a new line

// Input
// The first and the only line of the input contains the value stored in the variablenum

// Output
// Print all the even values greater than zero, and less than or equal to the value stored innumon a new line

// Sample Input 1 
// 12

// Sample Output 1
// 2
// 4
// 6
// 8
// 10
// 12

// Hint
// In the sample test case, the value stored innum = 12. Therefore, all the even values 
// less than or equal to 12, and greater than 0, will be printed
// Hence, the output becomes
// 2
// 4
// 6
// 8
// 10
// 12

function loop(N){
    for(var i=2;i<=N;i+=2){
        console.log(i)
    }
}
loop(12)