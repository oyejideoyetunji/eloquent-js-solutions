const flattenObjectLiteral = (data) => {
    const flattened = {};

    for (const itm in data) {
        if (
            typeof data[itm] === "object"
            && data[itm] !== null
            && Object.getPrototypeOf(data[itm]) === Object.prototype
        ) {
            Object.assign(flattened, flattenObjectLiteral(data[itm]))
        } else {
            Object.assign(flattened, {[itm]: data[itm]})
        }       
    }

    return flattened;
}

console.log(flattenObjectLiteral( {a: "a", b: "b", c: {d: "d", e: "e", f: {g: "g"}}} ))
