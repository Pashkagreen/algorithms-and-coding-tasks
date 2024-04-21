// Best time to buy and sell stock

let prices1 = [7,1,5,3,6,4]; // 7
let prices2 = [7,6,4,3,1] // 0

const maxProfit = (prices) => prices.reduce((acc, curr, index, array) => acc += (curr < array[index + 1] ?  array[index + 1] - curr : 0), 0)

console.log(maxProfit(prices1));
console.log(maxProfit(prices2))
