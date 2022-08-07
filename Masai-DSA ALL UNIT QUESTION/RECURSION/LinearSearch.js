function Lsearch(arr,ind,target){
    if(arr.length==ind){
        return -1
    }if(arr[ind]==target){
        return ind
    }return Lsearch(arr,ind+1,target)
}
let arr=[7,9,4,3,4,2]
console.log(Lsearch(arr,0,4))