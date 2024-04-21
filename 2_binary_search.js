import {getRandomArray} from "./utils/index.js";

let count = 0;

const array = getRandomArray(20);
const arrayForBinary = getRandomArray(20)

// Сложность O(log2n)
const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;

    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count++

        middle = Math.floor((start + end )/ 2);

        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
    }
    return position
}

const binarySearchWithRecursion = (array, item, start, end) => {
      let middle = Math.floor((start + end )/ 2);

      if (item === array[middle]) {
          return middle;
      }

      if (item < array[middle]) {
          return binarySearchWithRecursion(array, item, start,middle - 1)
      } else {
         return binarySearchWithRecursion(array, item, middle + 1, end)
      }
}

console.log(binarySearch(array, 12));

console.log({array, arrayForBinary});

console.log(binarySearchWithRecursion(arrayForBinary, 12, 0, arrayForBinary.length));

console.log('count =', count);
