const input1 = 'leetcode'; // 0
const input2 = 'loveleetcode'; // 2
const input3 = 'aabb'; // -1

const firstUniqueChar = (str) => {
    if (str.length > 100000) {
        return -1
    }

    const hashMap = new Map()

    for (let i = 0; i < str.length; i++) {
        let current = str[i];

        if (hashMap.has(current)) {
            hashMap.set(current, hashMap.get(current) + 1)
        } else {
            hashMap.set(current, 1)
        }
    }

    for (let n = 0; n < str.length; n++) {
        if (hashMap.get(str[n]) === 1) {
            return n
        }
    }

    return -1
}

console.log(firstUniqueChar(input1))
console.log(firstUniqueChar(input2))
console.log(firstUniqueChar(input3))
