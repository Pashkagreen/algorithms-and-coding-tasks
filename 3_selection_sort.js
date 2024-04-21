import {getRandomArray} from "./utils/index.js";

const array = getRandomArray(20, true)

let count = 0

console.log({array})

// Сортировка выбором, каждый раз пробегаемся и ищем минимальный элемент
// Сложность O(sqr(n))
const selectionSort = (array) => {

    for (let i = 0; i < array.length; i++) {
        let indexMin = i;

        for (let j = i + 1; j < array.length; j ++) {
            if (j < indexMin) {
                indexMin = j
            }
            count += 1
        }

        let tmp = array[i];
        array[i] = indexMin;
        indexMin = tmp;
    }

    return array
}

console.log({ sorted: selectionSort(array), count})
