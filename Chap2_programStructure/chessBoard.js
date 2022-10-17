function createChessboard(x, y) {
    let board = "";
    const buildLine = (length, char1, char2) => {
        if (length < 1) {
            return ""
        } else {
            return length % 2 === 0
                ? buildLine(length - 1, char1, char2) + char2
                : buildLine(length - 1, char1, char2) + char1
        }
    }

    while (y >= 1) {
        if (y % 2 === 0) {
            board = buildLine(x, "#", " ") + "\n" + board
        } else {
            board = buildLine(x, " ", "#") + "\n" + board
        }
        y--
    }

    return board
}

console.log(createChessboard(8, 8))
