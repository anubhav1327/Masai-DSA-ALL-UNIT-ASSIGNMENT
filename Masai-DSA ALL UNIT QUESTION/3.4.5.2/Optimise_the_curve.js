// Optimise the curve 
// Description

// Ross is skilled in calculations, he can do most of the complex calculations in head 
// but he is stuck with this quesiton and wants your help.
// Ross wants to solve the given mathematical equation which states that, he needs to 
// find the least non-negative integer Xo, that shall make the value of given equation 
// atleast K i.e.,

// A Xo^2 + B Xo + C >= K

// He is given A,B,C and K, which form the above equation. He has to answer T independent 
// test cases.
// Output -1 if there is no possible positive value of Xo

// Input
// Input Format :
// Number of test cases, space seperated values of A B C K respectively

// Constraints :

// - A, B, C <= 100000
// - K <= 10000000000
// - T <= 100000

// Output
// The value of Xo

// Sample Input 1 

// 1
// 3 2 4 15
// Sample Output 1

// 2

function runProgram(input){
    let line=input.split("\n")
    let T=+line[0]
    for(var i=1;i<=T;i++){
    let[A,B,C,K]=line[i].trim().split(" ").map(Number);
    let l=0;
    let h=K
    let ans=-1
    while(l<=h){
         let mid = l + parseInt((h - l) / 2)
            
            let val = (A* mid * mid) + (B * mid) + C
            
            if (val >= K) {
                h = mid - 1
                ans = mid
            } else {
                l = mid + 1
            }
        }
        
        if (ans == 0) {
            console.log(-1)
        } else {
            console.log(ans)
        }
    }
}
   
