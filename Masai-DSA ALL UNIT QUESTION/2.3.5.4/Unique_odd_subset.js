// Unique Odd Subsets 
// Description
// You are given an array A of size N, and an integer K
// You have to find out if there is a subset in the array A, such that

// 1. The number of distinct elements in the subset is `K`
// 2. The sum of all the elements in the subset is odd
// If the above two conditions are true, print True, else print False

// Input
// The first line of the input containsN, the size of the array
// The next line containsNspace separated integers, denoting the elements in the array
// The last line of the input containsK, as mentioned in the problem statement

// Constraints
// 1 <=N<= 18
// 1 <=A[i]<= 100

// Output
// If a subset exists, such that both the conditions given in the problem statement is 
// true, printTrue, else printFalse


// Sample Input 1 

// 3 
// 1 2 3
// 2
// Sample Output 1

// True
// Sample Input 2 

// 3
// 2 2 2
// 2
// Sample Output 2

// False
// Hint

// In the first sample test case, all the subsets of the given array are

// []
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 3]
// [2]
// [2, 3]
// [3]

// The value ofK = 2. The subset [2,3] has 2 distinct elements, and the sum is 5. Hence, the answer isTrue

// In the second test case, there is no subset with sum odd. Therefore, the answer isFalse

