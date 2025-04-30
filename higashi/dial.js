function nextDialValue(number) {
    return (number  + 1) %10;
}

function previousDialValue(number) {
    return (number  + 9) % 10;
}

// 使用例
let currentNumber = 3;
console.log(nextDialValue(currentNumber));
console.log(previousDialValue(currentNumber));
