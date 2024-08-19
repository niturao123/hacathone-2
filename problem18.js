function sum(num) {
    let newSum = 0;
    for (let i = 0; i <= num; i++) {
        newSum = newSum + i
    }
    return newSum

}
console.log(sum(3))

function newSum(num) {
    if (num === 0) {
        return 0
    }
    else {
        return num + newSum(num - 1)
    }
}
console.log(newSum(3))
console.log(newSum(5))
console.log(newSum(8))

