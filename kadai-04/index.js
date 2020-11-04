const product = (a, b) => {
    return a * b
}
const sum = (n) => {
    let result = 0
    for (let index = 1; index < n + 1; index = index + 1) {
        result = result + index
    }
    return result
}

console.log(product(107, 109))
console.log(sum(500))