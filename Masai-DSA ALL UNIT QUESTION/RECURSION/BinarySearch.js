// function search(arr,target,start,end){
//     if(start>end){
//         return -1
//     }
//     let mid=start+parseInt((start+end)/2)
//     if(arr[mid]==target){
//         return mid
//     }if(arr[mid]<target){
//         return search(arr,target,mid+1,end)
//     }
//     return search(arr,target,start,mid-1)
// }
// let arr=[12,34,67,89,100]
// console.log(search(arr,67,0,arr.length-1))




// function search(arr,target,start,end){
//     if(start>end){
//         return false
//     }
//     let mid=start+parseInt((start+end)/2)
//     if(arr[mid]==target){
//         return true
//     }if(arr[mid]<target){
//         return search(arr,target,mid+1,end)
//     }
//     return search(arr,target,start,mid-1)
// }
// let arr=[12,34,67,89,100]
// console.log(search(arr,7,0,arr.length-1))