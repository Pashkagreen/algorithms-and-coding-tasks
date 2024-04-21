export const getRandomArray = (length, isMixed = false) => {
    const array = Array.from({ length }).map((_, index) => index);

    if (!isMixed) {
        return array;
    }

    return array.sort(() => Math.random() - 0.5);
};


const array = [{id: 1}, {id: 2}, {id: 3}];
// {
//   1: {id : 1},
//   2: {id: 2},
// }

console.log(array.reduce((acc, cur) => ({...acc, [cur.id]: cur }), {}))
