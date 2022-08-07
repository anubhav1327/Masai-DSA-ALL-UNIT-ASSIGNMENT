// Breaking a record 
// Description
// You are provided the highest runs,N, ever scored in a cricket match till now, which is 
// current highest record.
// You are also given current runs,M scored by Sachin (Tendulkar) in a today's match.
// If Sachin breaks current record in that match, print Broken.
// If Sachin could not break that record, print Not Yet.
// If Sachin score exactly as current highest record, print Wao.

// Input
// Input Format:
// First line contains 2 space separated positive integers,N and M, representing the 
// current highest score and score made by Sachin in that match respectively

// Constraints:
// 1 <= N, M <= 10000

// Output
// Output one string based on the conditions mentioned

// Sample Input 1 
// 264 200

// Sample Output 1
// Not Yet

// function record(M,N){
//     if(M>N){
//         console.log("Broken")
//     }else if(M<N){
//         console.log("Not Yet")
//     }else{
//         console.log("Wao")
//     }
// }
// record(264,200)