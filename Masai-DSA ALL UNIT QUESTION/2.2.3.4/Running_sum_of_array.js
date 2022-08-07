// Running Sum of an Array 
// Description

// You are given an arrayAcontaining N integers, find the running sum of the array.

// The running sum of the array is defined as the sum of all the elements of the array
//  that exists before the current element, including the current element

// Refer the sample I/O for better understanding


// Input
// The first line of the input containsT, the number of test cases

// For each test case, the first line containsN, the number of elements in the array

// The next line containsNspace separated integers denoting the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <=N<= 10^6

// 1 <=A[i]<= 10^4


// Output
// For each test case, printNspace separated integers, denoting the running sum of the array, at different indexes in the array


// Sample Input 1 

// 1
// 5
// 1 2 3 4 5
// Sample Output 1

// 1 3 6 10 15 
// Hint

// In the sample test case, the array has 5 elements. For each element, we have to find the sum of all the elements that exist before it, and include the current element as well

// Therefore, for all the elements, the sum becomes

// index - 0->{1 = 1}

// index - 1->{1 + 2 = 3}

// index - 2->{1 + 2 + 3 = 6}

// index - 3->{1 + 2 + 3 + 4 = 10}

// index - 4->{1 + 2 + 3 + 4 + 5 = 15}

let Array=[1,2,3,4,5]
let sum=0,str=""
for(var i=0;i<Array.length;i++){
    
    sum+=Array[i]
    str+=sum+" "
}
    console.log(str)




