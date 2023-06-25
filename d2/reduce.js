// const number = [1,2,3,4,5]

// const total = number.reduce(sum)

// function sum(n,s){
//     return n+s
// }
// console.log(total)

const store = [
    {
        product: 'laptop',
        value: 1000,
        count: 3
    },
    {
        product: 'desktop',
        value: 1500,
        count: 4
    },
    {
        product: 'mobile',
        value: 500,
        count: 10
    }
];

const totalSum = store.reduce((acc, item)=>
 acc + (item.value * item.count), 0)

console.log(totalSum)