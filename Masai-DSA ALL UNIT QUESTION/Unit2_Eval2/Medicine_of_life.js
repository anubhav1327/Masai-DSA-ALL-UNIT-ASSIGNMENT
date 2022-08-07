// Medicine of Life 
// Description
// The vaccine for corona virus is in short supply, therefore, the Scientists at the 
// University of Masai, came up with certain number of chemical compounds which on 
// combining can make an alternative medicine for Corona Virus
// But, all these chemical compounds have different reactive power, and for the vaccine 
// to be effective, two chemical compounds need to be mixed such that the sum of total 
// reactivity of the two compounds is equal to K.

// The compounds are kept strictly increasing order of their reactivity. You have to find
//  out if there are two compounds whose combine reactivity is equal to K or not.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case, contains N, the number of compounds, and K is the
//  required reactivity
// The next line contains N space separated integers, indicating the reactivity of
//  individual compounds

// 1 <= T <= 10
// 2 <= N <= 1000, 2 <= B <= 3*10^5
// 1 <= Ai <= 10^5

// Output
// For each test case, printPossible, if there are two compounds for whom the sum of 
// individual reactivity isK, else printImpossible, on a new line.

// Sample Input 1 
// 2
// 5 7
// 1 2 3 4 5
// 5 12
// 1 2 3 4 5

// Sample Output 1
// Possible
// Impossible
// Hint
// In the first test case, the sum of compounds with reactivity 2 and that with reactivity 
// 5 is equal to K = 7, therefore, the answer is Yes
// In the second test case, no two compounds have the sum equal toK = 12. Therefore, 
// the answer is Impossible.

function reactivity(N,K,arr){
    let l=0;
    let r=arr.length-1;
    let flag=0
    while(l<r){
        if(arr[l]+arr[r]==K){
            flag=1
            break
        }else if(arr[l]+arr[r]<K){
            l++
        }else{
             r--
        }
    }
    if(flag){
        console.log("Possible")
    }else{
        console.log("ImPossible")
    }
}
reactivity(5,12,[1,2,3,4,5])