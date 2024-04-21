const cashFunction = (fn) => {
    const cash = {};

    return (n) => {
        if (cash[n]) {
            console.log("Взято из кэша", cash[n])
            return cash[n];
        }

        const result = fn(n);
        cash[n] = result;

        console.log("Посчитала функция", result);
        return result;
    };
}

const factorial = (num) => {
    let result = 1;

    while (num !== 1) {
        result = result * num;
        num = num - 1;
    }

    return result;
};

const cashedFactorial = cashFunction(factorial);
cashedFactorial(6);
cashedFactorial(5);
cashedFactorial(1);
cashedFactorial(4);
cashedFactorial(3);
cashedFactorial(5);
