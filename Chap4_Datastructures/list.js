const arrayToList = (array) => {
    const list = {};
    let currentNode = list
    for (const itm of array) {
        currentNode.value = itm;
        if (array.indexOf(itm) < array.length - 1) {
            currentNode.rest = {};
        } else {
            currentNode.rest = null;
        }
        currentNode = currentNode.rest;
    }

    return list
}

const listToArray = (list) => {
    const array = []
    let currentNode = list;

    while (currentNode) {
        array.push(currentNode.value)

        currentNode = currentNode.rest
    }

    return array
}

const prepend = (item, list) => {
    return { value: item, rest: list }
}

const nthValue = (n, list) => {
    if (n < 0 || !Number.isInteger(n)) return undefined;

    let index = 0;
    let currentNode = list;
    let value = undefined;

    while (index <= n && currentNode) {
        value = currentNode.value

        currentNode = currentNode.rest;
        index++;
    }

    return value;
}
console.log(JSON.stringify(arrayToList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
console.log(listToArray(arrayToList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
console.log(JSON.stringify(prepend(10, arrayToList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))))
console.log(nthValue(3, arrayToList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
