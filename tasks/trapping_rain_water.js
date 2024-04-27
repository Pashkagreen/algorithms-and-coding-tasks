// Сбор дождевой воды в блоках
// https://www.youtube.com/watch?v=2xZq8z_A-NQ&list=PL0k-9Y7O1GwccXKHRzmvVj17yB7T9pjTo&index=3

const input1 = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
const input2 = [4,2,0,3,2,5] // 9

const trap = (height) => {
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

    let left = 1;
    let right = height.length - 2;
    let total = 0;

    while (left <= right) {
        if (maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, height[left]);
            total += maxLeft - height[left];
            left += 1;
        } else {
            maxRight = Math.max(maxRight, height[right]);
            total += maxRight - height[right];
            right -= 1;
        }
    }

    return total;
}

console.log(trap(input1))
console.log(trap(input2))
