// function subsetSum(arr,ind,N,curr){
//     if(ind==N){
//         return
//     }
   
//     if(curr.length!=0){
//          console.log(curr)  
//     }

//     for(var i=ind+1;i<N;i++){
//         // curr.push(arr[i])
//         subsetSum(arr,i,N,curr+arr[i]+" ")
//         // curr.pop()
//     }
// }



// let arr=[1,2,3]
// subsetSum(arr,-1,3,"")


function printNum(N,i){
    if(i==N){
        return 
    }
    
     document.write(i+1)
     printNum(N,i+1)
}
printNum(10,0)


// function Power(n,rev){
//     if(rev==0){
//         return 1
//     }if(rev==1){
//         return n
//     }
//     return n*Power(n,rev-1)
// }

// console.log(Power(2,5))