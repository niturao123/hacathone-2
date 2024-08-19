function squareDigit(number) {
    let numberStr = String(number)
    for (let i = 0; i < numberStr.length; i++) {
        console.log(numberStr[i] * numberStr[i])
    }
}

squareDigit(234567)