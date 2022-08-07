// Smaller Neighbour Element 
// Description

// Given an array, find the nearest smaller element G[i] for every element A[i] in the array
//  such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.


// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000


// Output
// Print N space separated integers denoting the array G.


// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1


    
       
// function solve(arr){
//     let ans=""
//     let str=""
//     for(var i=0;i<arr.length;i++){
      
//       for(var j=i;j>=0;j--){
//           if(arr[j]<arr[i]){
//               ans=arr[j]
//               break;
//           }else{
//               ans="-1"
//           }
//       }
//      str+=ans+" "
//     }
//      console.log(str);
    
    
    
// }
// let arr=[39,27,11,4,24,32,32,1]
// solve(arr)










function runProgram(input){
    var input=input.trim().split("\n")
    var N=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    Smaller_Neighbour_Element(arr,N);
}

function Smaller_Neighbour_Element(arr,N){
    var stk=[];
    var newStk=[];
    for(var i=0;i<N;i++){
        while(stk.length>0 &&stk[stk.length-1]>=arr[i]){
            stk.pop()
        }if(stk.length==0){
            newStk.push(-1)
        }else{
            newStk.push(stk[stk.length-1])
        }
        stk.push(arr[i])
    }
    console.log(newStk.join(' '))
    
}
if(process.env.USER==="manjusha"){
    runProgram('');
}else{
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read='';
    process.stdin.on('data',function(input){
        read+=input;
    });
    process.stdin.on("end",function(){
        read=read.replace(/\n$/,"");
         read=read.replace(/\n$/,"");
         runProgram(read);
    });
    process.on("SIGINT",function(){
        read=read.replace(/\n$/,"");
         runProgram(read);
         process.exit(0);
    });
}
