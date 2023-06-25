const numbers = [1,2,3,4,5]

const num = numbers.splice(1,3,10,50)
console.log(numbers)//[1,5,5]
console.log(num)//[2,3,4]