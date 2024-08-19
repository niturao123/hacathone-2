function specialSum(number) {
    let add = 0;
    for (let i = 3; i <= number; i++)
        if (i % 3 === 0 || i % 5 === 0) {
            add += i
        }
    return add

}
console.log(specialSum(15))
console.log(specialSum(21))
console.log(specialSum(27))