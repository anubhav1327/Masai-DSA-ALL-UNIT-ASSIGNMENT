// SNE Modified II 
// Description
// Andy and Mark are playing a game of arrays.
// The game involves finding the smallest neighbor element to the left side for each 
// element in the array
// Andy counts the number of elements which do have a smaller neighbor element to the
//  left side. Help Andy find the count

// Input
// Input Format:
// First line contains an integer N denoting the number of elements in the array 
// (not necessarily distinct).
// Second line contains N space separated integers denoting the elements of the array.

// Constraints:
// N <= 100000

// Output
// Print a single integer denoting the number of elements which do not have a smaller 
// neighbor element to the left side

// Sample Input 1 
// 8
// 39 27 11 4 24 32 32 1

// Sample Output 1
// 3
// Hint
// The element at index 4 5 & 6 do have a smaller neighbor elements to the left side.
//  Therefore, the answer is 3


function small(N,arr){
    count=0
    for(var i=1;i<N;i++){
            if(arr[i]>=arr[i-1]){
                count++
        }
    }
    console.log(count)
}
small(8,[39 ,2, 11, 4, 24, 32, 32, 1])

