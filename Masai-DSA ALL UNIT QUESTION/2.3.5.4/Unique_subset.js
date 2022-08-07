// Unique Subsets 
// Description
// You are given an arrayAof sizeN.
// Find out if there exists a subset of this array, such that the size of the
//  subset is no lesser than K, and the number of distinct numbers in the subset is 1
// If such a subset exists, printTrue, else printFalse

// Input
// The first line of the input containsN, the size of the array
// The next line containsNspace separated integers, denoting the elements of the array
// Finally, the last line of the input containsK, as mentioned in the problem statement

// Constraints
// 1 <=N<= 18
// 1 <=A[i]<= 30

// Output
// PrintTrue, if the subset required, as mentioned in the problem statement exists, 
// else print False


// Sample Input 1 
// 3 
// 1 2 1
// 2
// Sample Output 1
// True
// Sample Input 2 
// 3 
// 1 2 1
// 3
// Sample Output 2

// False
// Hint

// In the first sample test case, all the subsets of the arrays are

// []
// [1]
// [1, 2]
// [1, 2, 1]
// [1, 1]
// [2]
// [2, 1]
// [1]

// The subset[1,1]has size 2, which satisfied the condition for the set to be greater than equal to K = 2. Therefore, the answer isTrue

// In the second test case, the value ofK = 3, and no subset of the array satisfies the required condition. Therefore, the answer isFalse



function UniqueSubset(arr,N,K,i,last,count){
if(i==N){
    if(count>=K)
        return true
        else
        return false
}
        if(last==-1){
        return UniqueSubset(arr,N,K,i+1,i,count+1)||UniqueSubset(arr,N,K,i+1,last,count)
        }else{
            if(arr[i]==arr[last]){
                return UniqueSubset(arr,N,K,i+1,i,count+1)
            }else{
                return UniqueSubset(arr,N,K,i+1,last,count)
            }
        }
}


let arr=[1,2,1]

if(UniqueSubset(arr,3,2,0,-1,0)){
    console.log("True")
}
    else{
        console.log("False")
    }
