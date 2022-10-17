const isEvenRecurrsive = (num) => {
    if (num < 0 || typeof num !== "number" || !Number.isFinite(num)) {
        return undefined;
    } else if (num <= 1) {
        return num === 0;
    } else {
        return isEvenRecurrsive(num - 2);
    }
}

console.log(isEvenRecurrsive(45))
