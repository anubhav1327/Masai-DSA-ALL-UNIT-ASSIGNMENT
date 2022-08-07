// Coding Club Fight
// Description
// Piyush went to fight for Coding Club. There were N soldiers with various powers. There will
//  be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush 
// can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All
//  the soldiers who are dead in previous round will reborn.Such that in each round there will 
// be N soldiers to fight. Count the number of soldiers that he can kill in each round and total 
// sum of their powers.

// Input
// Input Format
// First line contains N
// Next N line contains N integers which represents power of N soldiers
// Next line contains Q
// Next Q line contains Piyush's power for each of the Q rounds

// Constraints
// 1<=N<=10000
// 1<=power of each soldier<=100
// 1<=Q<=10000
// 1<=power of bishu<=100

// Output
// Output Format

// In each line, print the number of soldiers that he can kill in each round and total 
// sum of their powers.

// Sample Input 1 

// 7
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7
// 3
// 3
// 10
// 2
// Sample Output 1

// 3 6
// 7 28
// 2 3


function runProgram(input){
    let line=input.split("\n");
    let N=+line[0];
    p=1
    let arr=[]
    for(var i=0;i<N;i++){
        let power=+line[p];
        arr.push(power)
        p++
    }
    arr.sort((a,b)=>a-b)
    let Pre_sum=[]
    let cur_sum=0
    for(let i=0;i<N;i++){
        cur_sum+=arr[i];
        Pre_sum.push(cur_sum)
    }
    let Q=+line[p]
    p++
    for(let j=0;j<Q;j++){
        let wt=+line[p]
        p++
        let l=0
        let h=N-1
        let ans=-1
        while(l<=h){
            let mid=l+parseInt((h-l)/2)
            if(arr[mid]<=wt){
                l=mid+1
                ans=mid
            }else{
                h=mid-1
            }
        }
        console.log((ans+1)+" "+Pre_sum[ans])
    }
    
}