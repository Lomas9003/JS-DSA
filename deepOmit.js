// used to remove the key 

function deepOmit(obj, keysToOmit) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepOmit(item, keysToOmit));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      if (!keysToOmit.includes(key)) {
        acc[key] = deepOmit(obj[key], keysToOmit);
      }
      return acc;
    }, {});
  }

  // Return primitive values as-is
  return obj;
}
