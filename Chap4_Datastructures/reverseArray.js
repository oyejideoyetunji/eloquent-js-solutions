function reverseArray(arrayProp) {
    const array = [...arrayProp]
    const halfWay = Math.floor(array.length / 2)

    for (let index = 0; index < halfWay; index++) {
        let leftEl = array[index];
        let rightEl = array[(array.length - 1) - index]

        array[index] = rightEl;
        array[(array.length - 1) - index] = leftEl;
    }

    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]))
