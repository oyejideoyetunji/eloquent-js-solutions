function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

function getRange(max, min = 1) {
    return Array.from({ length: (max - min) + 1 })
        .map((_, idx) => idx + min)
}

function decomposeNumbersInRange(max, min = 1) {
    return getRange(max, min)
        .map(dig => findSolution(dig))
}


console.log(decomposeNumbersInRange(100));