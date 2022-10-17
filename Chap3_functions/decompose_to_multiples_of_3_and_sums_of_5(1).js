function decomposeDig(n) {
    if (n >= 3 && n % 3 === 0) {
        let factor = n / 3;
        return `3 * (${decomposeDig(factor)})`;
    } else if (n - 5 >= 0) {
        let factor = n - 5;
        return `5 + (${decomposeDig(factor)})`
    } else {
        return `${n}`
    }
}

function getRange(max, min = 1) {
    return Array.from({ length: (max - min) + 1})
        .map((_, idx) => idx + min)
}

function decomposeNumbersInRange(max, min = 1) {
    return getRange(max, min)
        .map(dig => decomposeDig(dig))
}

console.log(decomposeNumbersInRange(100))
