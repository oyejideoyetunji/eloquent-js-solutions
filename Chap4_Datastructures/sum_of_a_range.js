function getRangeSum(max, min = 1) {
    return Array.from({ length: (max - min) + 1 })
        .map((_, idx) => idx + min)
        .reduce((prev, curr) => prev + curr, 0)
}

console.log(getRangeSum(5, 1))
