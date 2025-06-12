function flattenObject(obj , parentKey = '' ,  result = {}) {
    // Your implementation.
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue; 

        const newKey = parentKey ? `${parentKey}.${key}` : key 

        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key] , newKey , result)
        }
        else {
            result[newKey] = obj[key]
        }
    }
    return result
}


console.log(flattenObject({a:{b:1}}))// 