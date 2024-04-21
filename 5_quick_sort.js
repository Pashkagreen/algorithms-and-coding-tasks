// Рекурсивный алгоритм быстрого поиска
// Сложность - O(log2n * n)

import {getRandomArray} from "./utils/index.js";

const array = getRandomArray(50, true);

let count = 0;

console.log({array})

const quickSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];

    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count++;

        if (i === pivotIndex) {
            continue
        }

        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log({sorted: quickSort(array), count})





