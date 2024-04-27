const input1 = [1,8,6,2,5,4,8,3,7] // 49
const input2 = [1,1] // 1
const input3 = [4,3,2,1,4] // 16
const input4 = [1,2,1] // 2

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;

    while (left < right) {
        // Текущий обьем
        let currentVolume = Math.min(height[left], height[right]) * (right - left);

        // Перезаписываем обьем если найден больший
        maxArea = Math.max(maxArea, currentVolume);

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
}

console.log(maxArea(input1))
console.log(maxArea(input2))
console.log(maxArea(input3))
console.log(maxArea(input4))
