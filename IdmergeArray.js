
// merge the array on unique id

function mergeData(arr1, arr2) {
    const map = new Map();

    // Add objects from arr1 into the map by id
    arr1.forEach(item => {
        map.set(item.id, { ...item });
    });

    // Merge objects from arr2 into the map (by id)
    arr2.forEach(item => {
        if (map.has(item.id)) {
            map.set(item.id, { ...map.get(item.id), ...item });
        } else {
            map.set(item.id, { ...item });
        }
    });

    // Convert map values to an array
    const merged = Array.from(map.values());
    console.log(merged);
}

// ifi/p
const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const arr2 = [
  { id: 1, age: 25 },
  { id: 3, name: "Charlie", age: 30 }
];
