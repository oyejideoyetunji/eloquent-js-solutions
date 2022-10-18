const deepEqual = (itm1, itm2, isEqual = true) => {
    if (typeof itm1 !== typeof itm2) {
        isEqual = false;
    } else if (
        (itm1 && itm2)
        && typeof itm1 === "object"
        && (Object.getPrototypeOf(itm1) === Object.prototype
        && Object.getPrototypeOf(itm2) === Object.prototype)
        || Array.isArray(itm1) && Array.isArray(itm2)
    ) {
        const itm1Keys = Object.keys(itm1);
        const itm2Keys = Object.keys(itm2);

        if (itm1Keys.length !== itm2Keys.length) {
            isEqual = false;
        } else {
            for (const key of itm1Keys) {
                isEqual = deepEqual(itm1[key], itm2[key])
            }
        }
    } else {
        isEqual = itm1 === itm2
    }

    return isEqual
}

console.log(deepEqual(
    {a: "a", b: "b", c: {b: "b", c: {b: "b", d: {a: ["2", 5, {f: "f", g: "g", h: null}], e: Number.POSITIVE_INFINITY}}}},
    {a: "a", b: "b", c: {b: "b", c: {b: "b", d: {a: ["2", 5, {f: "f", g: "g", h: null}], e: Number.POSITIVE_INFINITY}}}}
))
