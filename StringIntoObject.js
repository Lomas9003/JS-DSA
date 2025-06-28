function stringToObject(path, value) {
  const keys = path.split('.');
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    // If it's the last key, set the value
    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = {};
      current = current[key];
    }
  }

  return result;
}

// Example usage:
console.log(stringToObject("a.b.c", "someValue"));
// Output: { a: { b: { c: "someValue" } } }
