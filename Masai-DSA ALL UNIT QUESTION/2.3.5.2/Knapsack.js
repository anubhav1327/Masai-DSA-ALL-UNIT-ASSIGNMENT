function Knapsack(arr1,arr2,N,W){
    if(N==0||W==0)
    return 0;
    if(arr2[N-1]<=W)
   
    return Math.max(arr1[N-1]+(Knapsack(arr1,arr2,N-1,W-arr2[N-1])),(Knapsack(arr1,arr2,N-1,W)));
    
     else if(arr2[N-1]>W)
    return Knapsack(arr1,arr2,N-1,W)
}
console.log(Knapsack([60,100,150],[15,30,40],3,50));