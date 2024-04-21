import {getRandomArray} from "./utils/index.js";

let count = 0;

// Сложность O(n)
const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count++

        if (array[i] === item) {
            return i
        }
    }

    return null
}

console.log(linearSearch(getRandomArray(40,true ), 20));
console.log('count =', count);



