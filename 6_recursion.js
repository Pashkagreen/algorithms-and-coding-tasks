// Рекурсия - функция, которая вызывает сама себя

// Вычисление факториала
const factorial = (n) => {
    if (n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(5))

// Числа Фибоначчи
const fibonacchi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }

    return fibonacchi(n - 1) + fibonacchi(n - 2)
}

console.log(fibonacchi(8))
