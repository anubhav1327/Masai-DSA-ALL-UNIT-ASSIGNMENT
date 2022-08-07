// function fun1(x, y){
//     if (x == 0){
//        return y
//     }
//        return fun1(x - 1, x + y)
// }
// console.log(fun1(5,2))

// function merge(left,right){
//     let l=0;
//     let r=0
//     let mergeArr=[]
//     while(l<left.length && r<right.length){
//         if(left[l]<right[r]){
//             mergeArr.push(left[l])
//             l++
//         }else{
//             mergeArr.push(right[r])
//                 r++
//         }
//     }
//     while(l<left.length ){
        
//             mergeArr.push(left[l])
//             l++
//         }
//         while(r<right.length){
           
//                 mergeArr.push(right[r])
//                 r++
//             }
//             return mergeArr
// }


// let left=[7, 1, 5, 3, 9]
// left.sort()
// let right=[8, 4, 3, 5, 2, 6]
// right.sort()
// console.log(merge(left,right).join(" "))



function permute(arr,l,r){
    if(l==r){
        console.log(arr.join(" "))
        return
    }
    for(var i=l;i<=r;i++){
        arr=swap(arr,i,l)
        permute(arr,l+1,r)
        arr=swap(arr,i,l)
    }
}

function swap(arr,i,j){
    var temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    return arr
}



