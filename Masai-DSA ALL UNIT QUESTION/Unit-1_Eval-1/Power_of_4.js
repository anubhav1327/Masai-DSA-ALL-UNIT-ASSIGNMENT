// Power of 4 
// Description
// You are given a number stored in a variable with the name,nums
// You have to find the value of the number raised to the power of 4
// For example, if the value stored innum = 3. Therefore, the value of 3 raised to the
//  power of 4, equals 3 * 3 * 3 * 3 = 81, which is the required answer

// Therefore, the output is81
// Input
// The first and the only line of the input contains the value stored innum
// Output
// You have to print the value of the number, stored innum, raised to the power of 4
// Sample Input 1 
// 3
// Sample Output 1
// 81
// Hint
// In the sample test case, the value stored innum = 3. Therefore, the value of 3 raised 
// to the power of 4, means3 * 3 * 3 * 3 = 81, which is the required answer

// function Power(N){
//     console.log(N**4)
// }
// Power(3)


// Recursive Approach
// function Power(N,i){
//     if(i==0){
//         return 1
//     }
//     return N*Power(N,i-1)
// }
// console.log(Power(5,4))


// Itretive Approach

function Power(N){
    p=1
    for(var i=0;i<4;i++){
        p*=N

    }
    console.log(p)
}
Power(5)