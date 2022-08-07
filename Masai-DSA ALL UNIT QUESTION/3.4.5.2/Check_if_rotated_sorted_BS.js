// Description

// Given an array of N distinct integers. Check if this array is sorted and rotated 
// counter-clockwise.
// A sorted array is not considered as sorted and rotated, i.e., there should be at least 
// one rotation.

// Input
// Input Format
// First line consists of integer N
// Second consists of N integers separated by spaces.

// Constraints
// 1 <= N <= 1000

// Output
// Print "YES" if the array is sorted and rotated at least once else print "NO"

// Sample Input 1 

// 6
// 3 4 7 9 1 2
// Sample Output 1

// YES


function runProgram(input){
    let line=input.split("\n");
    let N=+line[0];
    let arr=line[1].trim().split(" ").map(Number)
    if (N == 1) {
        console.log("YES")
        return
    }
    
    let ct = 0
    
    for (let i = 1;i < N;i++) {
        if (arr[i - 1] > arr[i]) {
            ct ++
        }
    }
    
    if (ct == 1) {
        if (arr[0] < arr[N- 1]) {
            console.log("NO")
            
        } else {
            console.log("YES")
            
        }
    } else {
        console.log("NO")

    }

}

// 3 4 7 9 1 2