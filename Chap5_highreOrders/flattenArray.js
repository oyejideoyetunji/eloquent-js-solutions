/**
 * Not really an higer order function, just my major take away from the chapter
 * Same as some other solutions too.
 * @param {object} data 
 * @returns {any[]}
 */

const flattenArray = (data) => {
    let flattened = [];

    if (Array.isArray(data)) {
        for (const itm of data) {
            flattened = flattened.concat(flattenArray(itm))
        }
    } else {
        flattened = flattened.concat(data)
    }

    return flattened
}


console.log(flattenArray([1, 2, [3, 4, [5, 6,], [7, 8], 9, [10, [11, 12, [13, 14, [15, {}, {}]]]]]]))
