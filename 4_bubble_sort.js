import {getRandomArray} from "./utils/index.js";

const array = getRandomArray(20, true);

let count = 0;

console.log({array})

// Сложность - O(sqr(n))
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                count += 1;

                let tmp =  array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }

    return array
}

console.log({ sorted: bubbleSort(array), count})
