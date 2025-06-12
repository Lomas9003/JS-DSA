function JSONStringify(value) {

    const seen = new Set();

    function stringify(val) {
        if (val === null) return "null"
          if (typeof val === "string") return `"${val}"`
    if (typeof val === "number" || typeof val === "boolean") return String(val)
        if (typeof val === "function" || typeof val === "undefined") return undefined;

        if (Array.isArray(val)) {
            const res = val.map((item) => {
                const str = stringify(item);
                return str === undefined ? "null" : str;
            })
        return `[${res.join(",")}]`
        }

        if (typeof val === "object") {
            if (seen.has(val)) throw new TypeError("converting circular structure to JSON")
            seen.add(val);

            const props = Object.entries(val).map(([key, val]) => {
                const strVal = stringify(val)
                if (strVal === undefined) return undefined;
                return `"${key}":${strVal}`
            }).filter(Boolean);

            seen.delete(val);
            return `{${props.join(",")}}`
        }
        return undefined;
    }
    // Your implementation
   return stringify(value)
   
}

//For the purpose of user debugging.
JSONStringify("hello");

module.exports = JSONStringify