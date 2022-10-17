function buildTriangle(steps) {
    let triangle = ""
    while (steps >= 1) {
        triangle = "#".repeat(steps) + "\n" + triangle;
        steps--
    }

    return triangle
}

function buildTriangleRecurs(steps) {
    if (steps <= 1) {
        return "#"
    } else {
        return buildTriangleRecurs(steps - 1) + "\n" + "#".repeat(steps)
    }
}

console.log(buildTriangle(7))
console.log(buildTriangleRecurs(7))