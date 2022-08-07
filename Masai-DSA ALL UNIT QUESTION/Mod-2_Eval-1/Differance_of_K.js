// Difference of K 
// Description

// You are given a sorted array A of size N, and another integer K
// You have to find if there exists a pair of integers with index i and j, such that i != j,
//  andA[i] - A[j] = k
// If such a pair exists, print Yes, else print No

// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case contains N and K, the size of the array and the value of K.

// The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// -10^9 <=A[i]<= 10^9

// 0 <= K <= 10^9


// Output
// For each test case, print "Yes", if the pair as described in the problem exists, else print "No", on a new line.


// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 
// Sample Output 1

// Yes
// No
// Hint

// In the sample test case, in the first test case, the value ofN = 5, and that ofK = 3. Upon observation, you can see the pairs with values(2, 5)or(1,4)have a difference of 3. Therefore, the output is Yes.

// In the second test case, no pair exists such that the difference between them is 8. Therefore, the output is No.

function solve(arr,k){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]-arr[i]==k ){
                console.log("Yes");
                return
            }
        }
    }
    console.log("No")
}
solve([1,2,3,4,5],4)