// Birthday Shopping 
// Description
// Alex is celebrating his birthday and wants to buy a few things for himself.
// There are n items present in the shop indexed from 1 to n. He wished he could buy 
// everything but he has been instructed by his mother that he can buy exactly k items.
// Print all the various possible combinations of items he can buy.
// Make sure the combinations are sorted and distinct.
// For Clarity -
// [1,2] is valid while [2,1] is not.

// Input
// The first line of the input contains two integers n(1 ≤ n ≤ 20) and k (1 ≤ k ≤ n).

// Output
// Print each possible combination in a new line.
// Elements within the combination must be in non-decreasing order. All the
//  combinations must be distinct and sorted in ascending order or lexicographically.

// Sample Input 1 
// 4 2
// Sample Output 1
// 1 2 
// 1 3 
// 1 4 
// 2 3 
// 2 4 
// 3 4 
// Sample Input 2 

// 3 1
// Sample Output 2

// 1
// 2
// 3
// Hint

// Sample Input 1 :

// 4 2
// Total Items = 4 ( 1, 2, 3, 4)

// k = 2 (No of things he can buy)

// Combinations possible of 2 items out of 4 :

// 1 2 
// 1 3 
// 1 4 
// 2 3 
// 2 4 
// 3 4 

// Sample Input 2 :
// 3 1
// Total Items = 3 ( 1, 2, 3)

// k = 1 (No of things he can buy)

// Combinations possible of 1 item out of 3 :

// 1
// 2
// 3


function shop(N,K,pos,cur){
    if(K==0){
        console.log(cur.join(" "))
    }
    for(var i=pos;i<=N;i++){
        cur.push(i)
        shop(N,K-1,i+1,cur)
        cur.pop()
    }
}
shop(3,2,1,[])