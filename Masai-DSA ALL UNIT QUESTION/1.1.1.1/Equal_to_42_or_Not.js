// Equal to 42 or not! 
// Description
// You are given an array of N integers. You need to print Yes if 42 is present in array,
//  else print No.

// Input
// Input Format :
// First line contains number of integers N present in the array.
// Second line contains  N  space separated integers.

// Constraints :
// 1 <= N <= 100

// Output
// Output "Yes" or "No" based on condition mentioned above.

// Sample Input 1 
// 5
// 3 7 0 9 8

// Sample Output 1
// No

// Hint
// We print No as 42 is not present in array.


// let arr=[78,90,43,25,42,93,88];

// 1.InBuilt Function Approch

// function Equal42(arr){
//     if(arr.includes(42)){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }
// Equal42(arr)


// function Equal42(arr){
//     flag=0
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==42){
//             flag=1
//             break;        //It comes outoff the loop
//         }
//     }
//     if(flag==1){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }

// Equal42(arr)


// function Equal42(arr){
//     for(var i=0;i<arr.length;i++){
//            if(arr[i]==42){
//                console.log("Yes")
//                return             //It comes outoff the function
//            }
//         }
//         console.log("No")
//     }

//     Equal42(arr)



// function Equal42(arr){
//     const n=1;
//     let count=0
//         for(var i=0;i<arr.length;i++){
//                if(arr[i]==42){
//                    count++
//                    if(count>=n){
//                    console.log("Yes")
//                    return
//                }
//             }
//         }
//         console.log("No")
//     }
    
//         Equal42(arr)
    

function solve(arr,l,h){
    while(l<=h){
        let mid=l+parseInt((h-l)/2);
        if(arr[mid]==42){
             console.log("Yes")
            return 
        }else if(arr[mid]<42){
            l=mid+1
        }else{
            h=mid-1
        }
    }
    console.log("No")

}

let arr=[78,90,43,25,4,93,88];
arr.sort((a,b)=>a-b)
let l=0;
let h=arr.length-1
solve(arr,l,h)