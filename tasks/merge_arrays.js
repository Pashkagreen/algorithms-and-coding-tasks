const input1 = [1,2,2,1];
const input2 = [2,2];
// Output: [2,2]

const input3 = [4,9,5];
const input4 = [9,4,9,8,4];
// Output: [4,9] or [9,4]

const intersection = (arr1, arr2) => {
    let intersection = [];
    const firstArrayMap = {}

    arr1.forEach(el => {
        return firstArrayMap[el] ? firstArrayMap[el] += 1 : firstArrayMap[el] = 1
    })

    arr2.forEach(el => {
        if (firstArrayMap[el] > 0) {
            intersection.push(el)
            firstArrayMap[el]--
        }
    })

    return intersection
}

console.log(intersection(input1, input2));
console.log(intersection(input3, input4))

