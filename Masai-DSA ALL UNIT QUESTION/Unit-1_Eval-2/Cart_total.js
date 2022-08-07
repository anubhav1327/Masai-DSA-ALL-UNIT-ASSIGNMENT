// Cart Total 
// Description
// You are given two arrays, both of given size N
// The first array represents the price of commodities present in your cart, represented 
// by the variable name price
// The second array represents the quantity of each commodity that you need, represented 
// by the variable name quantity
// You have to find the total price of the commodities present in the cart
// For example, consider the value stored in N = 3, and the first array is
// price = [100,20,40], and the second array isquantity = [2,1,2]

// Then, the required cart total will be

// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300

// Input
// The first line of the input contains the value stored inN
// The next line containsNspace separated integers denoting the values stored in the
// price array
// The next line containsNspace separated integers denoting the values stored in
// quantity array

// Output
// Print the total cart value, as shown in the problem statement

// Sample Input 1 
// 3
// 100 20 40
// 2 1 2

// Sample Output 1
// 300

// Hint
// In the sample test case, the value stored inN = 3, and the first array is
// price = [100,20,40], and the second array isquantity = [2,1,2]
// Then, the required cart total will be
// Cart Total = (100 * 2 + 20 * 1 + 40 * 2) = (200 + 20 + 80) = 300
// Therefore, the required output will be 300

function cart(price,quantity){
    let ans=0
    for(let i=0;i<price.length;i++){
        let sum=0
        for(let j=i;j<=i;j++){
            sum=price[i]*quantity[j]
            console.log(sum)

        }
        ans+=sum
    }
    console.log(ans)

    
}
cart([100,20,40,90],[2,1,2,3])