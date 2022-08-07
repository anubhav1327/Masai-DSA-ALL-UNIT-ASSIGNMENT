// Opp Quick Sort 
// Description
// Given a list of n integers. Write a program for quick sort algorithm such that it 
// reverses the list in descending order.  You must not write any other sorting algorithm

// Input
// First line contains n which is the number of elements present in the array
// Second line contains n space-separated integers

// Output
// Output the elements present in the array sorted in descending order

// Sample Input 1 
// 5
// 2 3 1 4 5

// Sample Output 1
// 5 4 3 2 1

function Quick(arr,l,r){
    
        let i=l;
        let pivot=arr[r]
        for(var j=l;j<=r;j++){
            if(arr[j]>pivot){
            let temp=arr[j];
            arr[j]=arr[i]
            arr[i]=temp
            i++

        }
    }
    temp=arr[i];
    arr[i]=arr[r]
    arr[r]=temp
    return i

}
function random_pivot(arr, l, r) {
    let piv_pos = l + parseInt((Math.random() * 10000000) % (r - l))
    
    let temp = arr[piv_pos]
    arr[piv_pos] = arr[r]
    arr[r] = temp
    
    return Quick(arr, l, r)
}

function QuickSort(arr,l,r){
    if(l<r){
    let p=random_pivot(arr, l, r)
    QuickSort(arr,l,p-1)
    QuickSort(arr,p+1,r)
    }

}

arr=[90,78,54,43,23,89,76,66]
QuickSort(arr,0,arr.length-1)
console.log(arr.join(" "))