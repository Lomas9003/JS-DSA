Array.prototype.customFlat = function(depth = 1) {
    let result = [];

    for (let item of this) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...item.customFlat(depth - 1));
        } else {
            result.push(item);
        }
    }

    return result;
}

arr = [1,2,3,[4,5,[6,7]]]
let val = arr.customFlat(2)
console.log(val)