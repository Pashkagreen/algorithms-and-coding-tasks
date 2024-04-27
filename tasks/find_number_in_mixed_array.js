// Medium

let nums = [4,5,6,7,0,1,2];

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle
        }

        // Таргет в левой части
        if (nums[left] < nums[middle]) {
            // Отсортированная часть
            if (nums[left] <= target && target <= nums[middle]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        // Таргет в правой части
        } else {
            // Неотсортированная
            if (nums[middle] <= target && target <= nums[right]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }

    return -1
}

console.log(search(nums, 0));
console.log(search(nums, 3));
